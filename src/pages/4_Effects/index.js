import React, { useEffect, useState } from "react";

function Effects() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText && searchText.length > 3) {
      alert("Realizando Busca");
    }
  }, [searchText]);

  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "38px" }}>
      <form>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Controlled"
        />
      </form>
    </div>
  );
}

export default Effects;
