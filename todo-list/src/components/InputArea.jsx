import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleInput(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.handleAdd(inputText);
      setInputText("");
    }
  };

  return (
    <div className="form">
      <input
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        value={inputText}
        type="text"
      />
      <button
        onClick={() => {
          props.handleAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
