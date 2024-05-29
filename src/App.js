import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  // const container = document.getElementById('root');
  // const root = createRoot(container);
  
  const title = "";
  const animalFacts = <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>;
  console.log(title === "" ? "Click an animal for a fun fact" : title);
  
  // root.render(animalFacts);
  return animalFacts;
}

export default App;
