import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ background: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-2xl bg-white px-2 py-2 rounded-3xl">
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "olive", color: "white" }}
            onClick={() => setBgColor("olive")}
          >
            Olive
          </button>
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "red", color: "white" }}
            onClick={() => setBgColor("red")}
          >
            Red
          </button>
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "green", color: "white" }}
            onClick={() => setBgColor("green")}
          >
            Green
          </button>
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "blue", color: "white" }}
            onClick={() => setBgColor("blue")}
          >
            Blue
          </button>
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "indigo", color: "white" }}
            onClick={() => setBgColor("indigo")}
          >
            Indigo
          </button>
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "black", color: "white" }}
            onClick={() => setBgColor("black")}
          >
            Black
          </button>
          <button
            className="cursor-pointer outline-none px-6 py-1 rounded-2xl"
            style={{ background: "aqua", color: "black" }}
            onClick={() => setBgColor("aqua")}
          >
            Aqua
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
