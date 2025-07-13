import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <div className="rounded-2xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
        <Card
          title="Arch Card"
          description="I use Arch(BTW)"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_Nr8dM5k7rTNEXSH9_aaQPH0LXH41Jrbmw&s"
        />
      </div>
    </>
  );
}

export default App;
