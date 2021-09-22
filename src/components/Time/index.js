import React from "react";
import "./style.css";

function Time() {
  const now = new Date();
  const myClassName = "my_class";

  return (
    <div className={myClassName}>
      <span>🕖</span>{" "}
      {`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`}
    </div>
  );
}

export default Time;
