import React, { useState, createContext } from "react";
import ComponentB from "./componentB";
export const codeContext = createContext();
function ComponentA() {
  const [msg, setMsg] = useState("50817");

  return (
    <>
      <h1>Practicing createContext and useContext hooks</h1>
      <ul>
        <li>
          useContext allows us to share values between components that are
          nested without using props
        </li>
        <li>
          PROVIDER COMPONENT
          <ul>
            <li>import createContext from react</li>
            <li>export const MyContext = createContext()</li>
            <li>use MyContext.Provider tags to send the value</li>
          </ul>
        </li>
        <li>
          CONSUMER COMPONENTS
          <ul>
            <li>import useContext from react</li>
            <li>import MyContext from PROVIDER COMPONENT</li>
            <li>Save value that is sent with useContext(MyContext)</li>
          </ul>
        </li>
      </ul>
      <div className="componentBox">
        <h1>This is Component A</h1>
        <h3>Some Random code : 50817</h3>
        <h3>
          Sending this code to component B using createContext and useContext
          hook
        </h3>
        <codeContext.Provider value={msg}>
          <ComponentB />
        </codeContext.Provider>
      </div>
      <hr />
    </>
  );
}

export default ComponentA;
