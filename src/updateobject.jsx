import React, { useState } from "react";
function UpdateObject() {
  const [car, setCar] = useState({ model: 2024, name: "Ford" });

  const updateCarName = (event) => {
    setCar((c) => ({ ...c, name: event.target.value }));
  };

  const updateCarModel = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <div>
      <h1>
        This is UpdateObject Component - Learning how to change state of an
        object using spread operator
      </h1>
      <p>
        My favorite car is {car.name} and model is {car.model}
      </p>

      <input
        value={car.name}
        type="text"
        style={{ marginBottom: "20px" }}
        onChange={updateCarName}
      />
      <br />
      <input value={car.model} type="number" onChange={updateCarModel} />
      <hr />
    </div>
  );
}
export default UpdateObject;
