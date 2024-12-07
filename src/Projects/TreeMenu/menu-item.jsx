import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [displayMenus, setDisplayMenus] = useState({});

  function handleChildrenToggle(label) {
    setDisplayMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item.label && item.children ? (
          <span onClick={() => handleChildrenToggle(item.label)}>
            {displayMenus[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item.children && item.children.length && displayMenus[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
