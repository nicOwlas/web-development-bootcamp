import "./TodoItem.css";

function TodoItem(props: any) {
  // const [isDone, setIsDone] = useState(false);
  // function handleDone() {
  //   setIsDone(!isDone);
  // }
  return (
    <li
      style={{
        textDecorationLine: props.item.checked ? "line-through" : "none",
      }}
      onClick={() => props.onDone(props.id)}
    >
      {props.item.object}
    </li>
  );
}

export default TodoItem;
