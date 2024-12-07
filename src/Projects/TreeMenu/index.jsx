import "./styles.css";
import MenuList from "./menu-list";
const TreeMenu = ({menus = []}) => {
  return (
    <div className="container">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeMenu;
