import MenuItem from "./menu-item";
const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list">
      {list && list.length ? list.map((item) => <MenuItem item={item} />) : ""}
    </ul>
  );
};

export default MenuList;
