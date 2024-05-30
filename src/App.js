import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  // const container = document.getElementById('root');
  // const root = createRoot(container);
  
  const title = "";
  const background = <img className="background" alt="ocean" src="/files/images/ocean.jpg" />;

  const images = [];
  for (const animal in animals) {
    images.push(<img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
    />)
  };

  const animalFacts = (<div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className="animals">
      {images}
    </div>
  </div>);
  
  // root.render(animalFacts);
  return animalFacts;
}

export default App;
