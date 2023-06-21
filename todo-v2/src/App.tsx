import { useState } from "react";
import "./App.css";
import InputValue from "./InputValue";
import TodoItem from "./TodoItem";

function App() {
  const [items, setItems] = useState([{ object: "Milk", checked: false }]);

  function handleValidate(inputValue: string) {
    setItems([{ object: inputValue, checked: false }, ...items]);
  }

  function handleDone(id: number) {
    const itemsUpdated = [...items];
    itemsUpdated[id] = {
      ...itemsUpdated[id],
      checked: !itemsUpdated[id].checked,
    };
    setItems(itemsUpdated);
    console.log(items);
  }

  let itemList: any = [];
  items.map((item: any, index: number) => {
    return itemList.push(
      <TodoItem key={index} id={index} item={item} onDone={handleDone} />
    );
  });

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <InputValue onValidate={handleValidate} />
      {itemList}
    </div>
  );
}

export default App;
