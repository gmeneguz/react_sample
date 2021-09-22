import React, { useState } from "react";
import Child from "./child";

function Props() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "38px" }}>
      <form>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Controlled"
        />
        <button
          type="button"
          onClick={() => {
            setList([...list, newItem]);
            setNewItem("");
          }}
        >
          Adicionar
        </button>
      </form>
      -------
      <Child list={list} />
    </div>
  );
}

export default Props;
