import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [itemList, setItemList] = useState([]);

  function handleAdd(inputText) {
    inputText !== "" &&
      setItemList((previousValue) => [inputText, ...previousValue]);
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
      <InputArea handleAdd={handleAdd} />
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
