import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleInput(event) {
    const newInput = event.target.value;
    setInputText(newInput);
  }

  function handleAdd(event) {
    inputText !== "" &&
      setItemList((previousValue) => [inputText, ...previousValue]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} value={inputText} type="text" />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
