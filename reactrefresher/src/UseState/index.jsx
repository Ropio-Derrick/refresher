import { useState } from "react";

function index() {
  const [color, setColor] = useState(false);

  // Function to toggle the flag
  const toggleFlag = () => {
    setColor(!color);
  };

  const flagColor = color ? "Red" : "Orange";
  return (
    <div>
      <div>
        <p>The Color is {flagColor}</p>
        <button onClick={toggleFlag}>Toggle Flag</button>
      </div>
    </div>
  );
}

export default index;
