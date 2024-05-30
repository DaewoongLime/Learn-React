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
      onClick={displayFact}
    />)
  };

  const animalFacts = (<div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>);
  
  // root.render(animalFacts);
  return animalFacts;
}

function displayFact(e) {
  const name = e.target.alt;
  const index = Math.floor(Math.random()*3);
  const funfact = animals[name].facts[index];

  document.getElementById('fact').innerHTML = funfact;
}
export default App;
