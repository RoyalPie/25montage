import { useEffect, useState } from "react";
import "./styles.css";
const ScrollIndicator = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  function handleScroll() {
      let percentage =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;
      setScrollPercentage(percentage)
  }
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(
        "https://dummyjson.com/products?limit=80&select=title,price"
      );
      const data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  if (loading) {
    return <div>Loading data ! Pleaae wait</div>;
    }
    console.log(scrollPercentage)
  return (
    <div className="scroll-container">
      <div className="proress-container">
        <h1>Scroll Indicator</h1>
          <div className="progress" style={{maxWidth: `${scrollPercentage}%`}}></div>
      </div>
      <ul className="content">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <p>{product.title}</p>
              <span>{product.price}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ScrollIndicator;
