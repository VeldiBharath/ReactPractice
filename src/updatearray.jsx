import React, { useState } from "react";
function UpdateArray() {
  const [fruits, setFruits] = useState(["Pineapple"]);

  function handleAddFood() {
    const newfood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFruits((f) => f.concat(newfood));
  }

  function removeFruits(index) {
    setFruits((f) => f.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>
        This is UpdateArray Component - Learning how to change state of an array
        using spread operator
      </h1>
      <h3 style={{ margin: "0px" }}>All fruits that are available : </h3>
      <br />
      <ul>
        {fruits.map((fruit, index) => (
          <div key={index} className="fruitsContainer">
            <li>{fruit}</li>
            <button onClick={() => removeFruits(index)}>RemoveFood</button>
          </div>
        ))}
      </ul>
      <p>Add fruits to the list : </p>
      <input id="foodInput" type="text" placeholder="Enter Fruit name here" />
      <button onClick={handleAddFood}>Add Food</button>
      <hr />
    </div>
  );
}
export default UpdateArray;
