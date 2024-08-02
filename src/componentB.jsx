import React, { useState, useContext } from "react";
import { codeContext } from "./componentA.jsx";

function ComponentB() {
  const msg = useContext(codeContext);
  return (
    <div className="componentBox">
      <h1>This is Component B</h1>
      <h3>I recevied a code from Component A : {msg}</h3>
    </div>
  );
}

export default ComponentB;
