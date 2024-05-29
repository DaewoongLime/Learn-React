import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  // const container = document.getElementById('root');
  // const root = createRoot(container);
  
  const title = "";
  const background = <img className="background" alt="ocean" src="/files/images/ocean.jpg" />;
  const animalFacts = (<div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
  </div>);
  
  // root.render(animalFacts);
  return animalFacts;
}

export default App;
