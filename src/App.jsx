import menus from '../src/Projects/TreeMenu/data'
import Accordian from "./Projects/Accordian"
import AutoComplete from './Projects/auto-complete'
import CaroChess from './Projects/Caro'
import ContextFlag from './Projects/ContextFlag'
import FeatureFlagGlobalState from './Projects/ContextFlag/context'
import CustomTabs from './Projects/Custom-Tabs'
import GitProfile from './Projects/Github-Profile'
import ImageSlider from "./Projects/ImageSlider"
import LoadMoreData from "./Projects/Load-more-data"
import ModalTest from './Projects/Modal-Popup/modal-test'
import QrCodeGen from './Projects/qr-code'
import RandomColor from "./Projects/RandomColor"
import ScrollIndicator from './Projects/Scroll-Indicator'
import StarsRating from "./Projects/StarsRating"
import ThemeToggle from './Projects/theme-changer'
import TreeMenu from "./Projects/TreeMenu"

function App() {

  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarsRating numStars={8}/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/> */}
      {/* <LoadMoreData url={'https://dummyjson.com'}/> */}
      {/* <TreeMenu menus={menus}/> */}
      {/* <QrCodeGen /> */}
      {/* <ThemeToggle /> */}
      {/* <ScrollIndicator /> */}
      {/* <CustomTabs /> */}
      {/* <ModalTest /> */}
      {/* <GitProfile /> */}
      {/* <AutoComplete /> */}
      {/* <CaroChess /> */}
      <FeatureFlagGlobalState>
        <ContextFlag />
      </FeatureFlagGlobalState>
    </>
  );
}

export default App
