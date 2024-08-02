import React, { useState } from "react";

function UpdateArrayOfObjects() {
  const [cars, setCars] = useState([]);
  const [caryear, setCarYear] = useState(new Date().getFullYear());
  const [carname, setCarName] = useState("");

  function handleAddCar() {
    const newCar = { name: carname, year: caryear };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarName("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function changeName(event) {
    setCarName(event.target.value);
  }

  function changeYear(event) {
    setCarYear(event.target.value);
  }

  return (
    <div>
      <h1>
        This is UpdateArrayOfObjects Component - Learning to update array of
        Objects
      </h1>
      <h3>Array of Cars objects with name and year</h3>
      <ul>
        {cars.map((car, index) => (
          <div key={index} className="carsContainer">
            <li>
              {car.name}
              {car.year}
            </li>
            <button onClick={() => handleRemoveCar(index)}>Remove Car</button>
          </div>
        ))}
      </ul>
      <input
        type="text"
        value={carname}
        placeholder="Enter Car Name here"
        onChange={changeName}
      />
      <br />
      <input type="number" value={caryear} onChange={changeYear} />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <hr />
    </div>
  );
}
export default UpdateArrayOfObjects;
