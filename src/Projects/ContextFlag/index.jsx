import { useContext } from "react";
import Accordian from "../Accordian";
import CaroChess from "../Caro";
import RandomColor from "../RandomColor";
import ThemeToggle from "../theme-changer";
import TreeMenu from "../TreeMenu";
import menus from "../TreeMenu/data";
import { FeatureFlagsContext } from "./context";

const ContextFlag = () => {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);
  const ComponentsToRender = [
    {
      key: "showThemeMode",
      component: <ThemeToggle />,
    },
    {
      key: "showCaroChess",
      component: <CaroChess />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeMeunu",
      component: <TreeMenu menus={menus} />,
    },
  ];
  function checkEnable(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }
  if (loading) return <h1>Loading data ! Please wait</h1>;
  return (
    <div className="context-container">
      <h1>Feature Flags</h1>
      {ComponentsToRender.map((item) =>
        checkEnable(item.key) ? item.component : null
      )}
    </div>
  );
};
export default ContextFlag;
