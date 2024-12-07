import { useState } from "react"
import data from "./data"
import './style.css'
const Accordian = () => {
  const initState = new Array(data.length).fill(0)
  const [selected, setSelected] = useState(null);
  const [multiselected, setMultiSelected] = useState(initState);
  const [enable, setEnable] = useState(false);
    const handleMultiClick = (id) => {
      const newArr = multiselected.map((v, i) => {
        if (i === id - 1) return 1;
        else return v;
      });
      setMultiSelected(newArr);
      console.log(newArr)
  };
  const handleClick = (id) => {
    setSelected(id)
  };
  return (
    <div className="wrapper">
      <button onClick={() => setEnable((prev) => !prev)}>
        Enable Multiselected
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="title">
                  <h3>{item.question}</h3>
                  <span
                    onClick={
                      enable
                        ? () => handleMultiClick(item.id)
                        : () => handleClick(item.id)
                    }
                  >
                    +
                  </span>
                </div>
                <div className={
                  enable
                  ? `${!multiselected[item.id-1] && "hidden"}`
                  : `${selected !== item.id && "hidden"}`
                }>
                  {item.answer}
                </div>
              </div>
            );
          })
        ) : (
          <div>No data avaiable</div>
        )}
      </div>
    </div>
  );
}

export default Accordian
