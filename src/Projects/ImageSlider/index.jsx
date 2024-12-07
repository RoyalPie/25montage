import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './style.css'
const ImageSlider = ({ url, limit }) => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);

  async function fetchImage(url) {
    try {
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
        console.log(data);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  function handlePrev() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function handleNext() {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    if (url !== null) {
      fetchImage(url);
    }
  }, [url]);

  if (loading) return <div>Images are loading!!!</div>;
  if (error !== null) return <div>Error: {error}</div>;
  return (
    <div className="img-slider">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrev}
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={
                current === index ? "current-img" : "current-img hidden"
              }
            />
          ))
        : ""}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                className={
                  current === index
                    ? "current-indicator"
                    : "current-indicator inactive"
                }
                key={index}
                onClick={() => setCurrent(index)}
              ></button>
            ))
          : ""}
      </span>
    </div>
  );
};

export default ImageSlider;
