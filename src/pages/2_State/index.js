import React, { useState } from "react";
import Time from "../../components/Time";

function State() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  function clearNewItem() {
    setNewItem("");
  }

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

      {/* controlled -> Muda o estado */}
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
            clearNewItem();
          }}
        >
          Adicionar (set state)
        </button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const inputValue = event.target.meu_input.value;
          setList([...list, inputValue]);
          event.target.meu_input.value = "";
        }}
      >
        {/* uncontrolled -> Não Muda o estado / não gera renderização ao digitar*/}
        <input name="meu_input" placeholder="Uncontrolled" />
        <button type="submit">Adicionar Submit</button>
      </form>
    </div>
  );
}

export default State;
