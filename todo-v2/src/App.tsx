import React, { useEffect, useState } from "react";
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
  const localStorageItems = localStorage.getItem("items");
  const initialItems = localStorageItems ? JSON.parse(localStorageItems) : [];
  const [items, setItems] = useState<Item[]>(initialItems);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

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
    <div className="container">
      <h1>My Todo List</h1>
      <div className="input-value">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter todo item"
        />
        <button onClick={() => handleValidate(inputValue)}>Add Task</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <TodoItem key={index} item={item} index={index} onDone={handleDone} />
        ))}
      </ul>
    </div>
  );
};

export default App;
