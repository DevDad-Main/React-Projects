import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColour] = useState("blue");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {" "}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {" "}
          <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Test Bootun
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Test Bootun
          </button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Test Bootun
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
