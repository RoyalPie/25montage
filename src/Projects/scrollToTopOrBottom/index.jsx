import useFetch from "../CustomHooks/use-fetch"

const ScrollToToporBottom = () => {
    const { data, pending, error } = useFetch(
      "https://dummyjson.com/products?limit=80&select=title",
      {}
    );
  return (
    <>
      <h1>ScrollToToporBottom</h1>
      <h3>This is The TOP SECTION</h3>
      <button
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        Scroll To Bottom
      </button>
      {pending && <h3>Loading Please Wait!!</h3>}
      {error && <h3>{error}</h3>}
      {data && data.products && data.products.length > 0
        ? data.products.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
            </div>
          ))
        : null}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Scroll To Top
      </button>
      <h3>This is The Bottom SECTION</h3>
    </>
  );
}
export default ScrollToToporBottom