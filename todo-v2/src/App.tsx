import React, { useState } from "react";
import "./App.css";

interface Item {
  task: string;
  checked: boolean;
}

interface TodoItemProps {
  item: Item;
  index: number;
  onDone: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, index, onDone }) => {
  return (
    <li
      style={{
        textDecoration: item.checked ? "line-through" : "none",
      }}
      onClick={() => onDone(index)}
    >
      {item.task}
    </li>
  );
};

const App = () => {
  const [items, setItems] = useState<Item[]>([
    { task: "Buy milk", checked: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleValidate = (task: string) => {
    if (task !== "") {
      setItems((prevItems) => [...prevItems, { task, checked: false }]);
      setInputValue("");
    }
  };

  const handleDone = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo item"
      />
      <button onClick={() => handleValidate(inputValue)}>Add Task</button>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} index={index} onDone={handleDone} />
      ))}
    </div>
  );
};

export default App;
