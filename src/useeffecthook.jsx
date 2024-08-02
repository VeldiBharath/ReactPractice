import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");

    //remove listener after component rendering once, any props, state change or conditional rendering from other components can cause useeffect to run multiple times.
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener removed");
    };
    //Mouting can happen, re renders can happen with state, props variables change, conditional rendering, ect
    //single array with no dependencies mean that useeffect runs only once when component is mounted
    //array with dependencies(state variables like [width, height]) means useeffect runs everytime those state variables are updated.
    //No array means useeffect hook runs each time when render, rerender, props, state, variables change.
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <h1>
        This is useEffectHook Component - tells the resized window dimensions
        using useEffectHook
      </h1>
      <ul>
        <li>
          UseEffect hook tells perform some block of code when component
          re-renders, mounts or state of a value changes.
        </li>
        <li>
          Uses : Event listeners, DOM manipilation, subscriptions, fetchin data
          from API, cleanup when unmount
        </li>
        <li>
          Mouting can happen, re renders can happen with state, props variables
          change, conditional rendering, ect
        </li>
        <li>
          single array with no dependencies mean that useeffect runs only once
          when component is mounted
        </li>
        <li>
          array with dependencies (state variables like [width, height]) means
          useeffect runs everytime those state variables are updated.
        </li>
        <li>
          No array means useffect hook runs each time when render, rerender,
          props, state, variables change.
        </li>
        <li>
          remove listener after component rendering once, any props, state
          change or conditional rendering from other components can cause
          useeffect to run multiple times.
        </li>
      </ul>
      <p>
        The width and height of Window is : {width} x {height}
      </p>
      <hr />
    </div>
  );
}

export default UseEffectHook;
