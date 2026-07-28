import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("#4F46E5");

  const generateColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setBgColor(randomColor);
  };

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="card">


        <div className="color-box">
          <span>{bgColor}</span>
        </div>

        <button onClick={generateColor}>
          Generate Color
        </button>
      </div>
    </div>
  );
}

export default App;