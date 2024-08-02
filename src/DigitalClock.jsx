import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function timer() {
    let hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    return `${padzero(hours)}: ${padzero(mins)}: ${padzero(
      secs
    )} ${meridiem} EDT`;
  }

  function padzero(num) {
    return num < 10 ? "0" + num : num;
  }

  return (
    <>
      <h1>
        This is DigitalClock component - Practicing useState and useEffect
        Hooks.
      </h1>
      <div className="clockContainer">
        <h1>
          Time Now {">"} {timer()}
        </h1>
      </div>
      <hr />
    </>
  );
}

export default DigitalClock;
