import { useEffect, useState } from "react";
import "./styles.css";
const LoadMoreData = ({ url, limit = 12 }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `${url}/products?limit=${limit}&skip=${
          page === 0 ? 0 : page * 12
        }&select=title,price,thumbnail`
      );
      const data = await res.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) =>
          [...prevData, ...data.products].filter(
            (product, index, self) =>
              self.findIndex((p) => p.id === product.id) === index
          )
        );
        setLoading(false);
      }
    } catch (e) {
      setError(e);
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (products && products.length === 48) setDisable(true);
  }, [products]);
  if (loading) return <div>Products are loading!!!</div>;
  if (error !== null) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <div className="products">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={`Product No.${product.id}`} />
                <h1>{product.title}</h1>
                <h3>${product.price}</h3>
              </div>
            ))
          : ""}
      </div>
      <button disabled={disable} onClick={() => setPage(page + 1)}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreData;
