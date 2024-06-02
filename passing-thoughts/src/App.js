import React, { useEffect, useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime()
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime()
    }
  ]);

  const addThought = (thought) => setThoughts( (prev) => [thought, ...prev]);

  const removeThought = (thoughtIdToRemove) => setThoughts ( (prev) => prev.filter((thought => thought.id != thoughtIdToRemove)) );
  
  const [uptime, setUptime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setUptime(prev => prev+1), 1000);
    return () => clearInterval(interval);
  }, []);

  console.log(uptime);

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
