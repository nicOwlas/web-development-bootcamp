import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

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

  function handleDelete(id) {
    setItemList((previousItems) => {
      return previousItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  //itemList.filter((item) => item.id !== id)

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
          {itemList.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={item}
              onChecked={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
