import React from "react";
function ToDoItem(props) {
  // function onChecked() {
  //   return props.onChecked(props.id);
  // }

  return <li onClick={() => props.onChecked(props.id)}>{props.item}</li>;
}

export default ToDoItem;
