import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
const StarsRating = ({ numStars = 6 }) => {
  const [stars, setStars] = useState(0);
  const [onHover, setOnHover] = useState(0);
  const handleClick = (index) => {
    setStars(index);
  };
  const handleMouseEnter = (index) => {
    setOnHover(index);
  };
  const handleMouseleave = () => {
    setOnHover(stars);
  };
  return (
    <div>
      {[...Array(numStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (onHover || stars) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseleave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarsRating;
