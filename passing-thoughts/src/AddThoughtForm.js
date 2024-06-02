import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [txt, setTxt] = useState("");

  const handleTextChange = (event) => {
    setTxt(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    txt != "" && props.addThought({
      id: generateId(),
      text: txt,
      expiresAt: getNewExpirationTime()
    });
    setTxt("");
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={txt}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
