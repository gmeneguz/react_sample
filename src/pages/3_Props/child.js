import React from "react";
import Time from "../../components/Time";

function Child({ list }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "38px" }}>
      <Time />
      <div>
        <h3>Lista</h3>
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Child;
