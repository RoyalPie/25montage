import useWindowResize from "./useWindowResize";

const TestWindowResize = () => {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div>
      <h1>TestWindowResize</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
};
export default TestWindowResize;
