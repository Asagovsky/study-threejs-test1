import { useRef } from "react";
import { useRenderJumpingBoxes } from "./hooks/useRenderJumpingBoxes";

function App() {
  const ref = useRef(null);
  useRenderJumpingBoxes(ref);

  return (
    <div className="App">
      <div ref={ref}></div>
    </div>
  );
}

export default App;
