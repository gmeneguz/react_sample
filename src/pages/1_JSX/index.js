import React from "react";
import "./style.css";

function JSX() {
  const now = new Date();
  const myClassName = "my_class";

  return (
    <>
      <div>
        <div
          className={myClassName}
        >{`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`}</div>
      </div>
    </>
  );
}

export default JSX;
