import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

const TestUseClickOutside = () => {
    const [showContent, setShowContent] = useState(false);
    
    const ref = useRef();
    useClickOutside(ref, ()=>setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random Content</h1>
          <p>Click outside to close popup</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
export default TestUseClickOutside