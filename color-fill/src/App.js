import React, { useState } from "react";

function App() {
  const [colorDiv, setColorDiv] = useState("#ff0000");
  const [colorPicker, setColorPicker] = useState("");

  // function handleChange(event) {
  //   setColorPicker(event.target.value);
  // }

  // function handleClick() {
  //   setColor(colorPicker);
  // }

  return (
    <div className="App">
      <input
        type="color"
        value={colorPicker}
        onChange={(event) => {
          setColorPicker(event.target.value);
        }}
      />
      <div
        id="div1"
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: `${colorDiv}`,
        }}
        onClick={() => setColorDiv(colorPicker)}
      />
      <div
        id="div2"
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: `${colorDiv}`,
          margin: "20px 0 0 0",
        }}
        onClick={() => setColorDiv(colorPicker)}
      />
    </div>
  );
}

export default App;
