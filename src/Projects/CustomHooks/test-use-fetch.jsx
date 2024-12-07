import useFetch from "./use-fetch";

const TestUseFetch = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=80&select=title,price",
    {}
  );

  return (
    <div>
      <h1>TestUseFetch</h1>
      {pending && <h3>Loading Please Wait!!</h3>}
      {error && <h3>{error}</h3>}
      {data && data.products && data.products.length > 0
        ? data.products.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
          ))
        : null}
    </div>
  );
};
export default TestUseFetch;
