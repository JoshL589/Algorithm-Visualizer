import { useState } from "react";
import "./App.css";
import Bar from "./components/SortingVisualizer/Bar.jsx";
import generateRandomArray from "./utils/generateRandomArray.js";

function App() {
  const [array, setArray] = useState(generateRandomArray(200));

  return (
    <div className="App">
      <div className="bars-container">
        {array.map((value, index) => (
          <Bar key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
