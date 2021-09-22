import React, { useEffect, useState } from "react";

function Effects() {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (searchText && searchText.length > 3) {
      setIsSearching(true);
      const url = process.env.REACT_APP_API_URL + "/users?search=" + searchText;
      console.log(`Buscando Usuários em: ${url}`);
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setUsers(result);
        })
        .catch((error) => {
          console.log(error);
          alert("Erro ao processar a requisição");
        })
        .finally(() => {
          setIsSearching(false);
        });
    }
  }, [searchText]);

  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "32px" }}>
      <small>Buscar Usuários (digitar ao menos 4 letras)</small>
      <form>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Controlled"
        />
      </form>
      {isSearching && <div>processando...</div>}
      <h3>Lista de Usuários</h3>
      <ul>
        {users.map((user) => (
          <li>Nome: {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Effects;
