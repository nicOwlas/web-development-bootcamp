import { useState } from "react";

function InputValue(props: any): any {
  const [inputValue, setInputValue] = useState("");
  function handleChange(event: any): void {
    setInputValue(event.target.value);
  }
  return (
    <div style={{ margin: "10px 0 10px 0" }}>
      <input
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter todo item"
      ></input>
      <button
        onClick={() => {
          props.onValidate(inputValue);
          setInputValue("");
        }}
      >
        Validate
      </button>
    </div>
  );
}

export default InputValue;
