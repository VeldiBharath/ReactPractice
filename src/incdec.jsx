import React, { useState } from "react";

function IncDec() {
  const [name, setName] = useState("Guest");

  const updateName = () => {
    setName("Bharath");
  };

  const [age, setAge] = useState(0);

  const incAge = () => {
    setAge(age + 1);
  };

  const decAge = () => {
    setAge(age - 1);
  };

  return (
    <div>
      <h1>
        This is Increment decrement component - learning react hook (useState)
      </h1>
      <h3>Hi {name} how are you?</h3>
      <button onClick={updateName}>Click to get my name</button>
      <h3>Set my age as you like</h3>
      <button onClick={incAge}>Increase Age</button>
      <p>My age is {age}</p>
      <button onClick={decAge}>Decrease my age</button>
      <h3>
        useRef Hook is similar to useState Hook. Re-rendering happens for each
        time when state value gets updated in case of useSate. Re-redering
        doesn't happen in case of useRef Hook
      </h3>
      <h3>
        Syntax : const val = useRef() val can be anything like a single value,
        array, object, HTML , ect
      </h3>
      <h3>
        useRef will return an object. The object will contain only one property
        with (content : "What ever we passed in useRef()"). We can access the
        val.content anywhere in our component.
      </h3>
      <hr />
    </div>
  );
}
export default IncDec;
