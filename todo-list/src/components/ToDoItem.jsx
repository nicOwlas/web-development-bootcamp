import React, { useState } from "react";
function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleCompletion(event) {
    setIsDone(!isDone);
  }

  return (
    <li
      style={{ textDecoration: isDone ? "line-through" : null }}
      onClick={handleCompletion}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
