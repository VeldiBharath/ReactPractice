import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FF8888");

  const changeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <h1>
        This is colorPicker program to choose color using Onchange event handler
        and useState hook
      </h1>

      <div className="colorContainer">
        <div className="displayColor" style={{ backgroundColor: color }}>
          <p>Selected Color : {color}</p>
        </div>

        <label>Pick A Color</label>
        <input value={color} type="color" onChange={changeColor} />
      </div>
      <hr />
    </>
  );
}

export default ColorPicker;
