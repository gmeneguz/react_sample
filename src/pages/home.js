import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/JSX">JSX</Link>
      <Link to="/state">Estado</Link>
      <Link to="/props">Props</Link>
      <Link to="/effects">Effects</Link>
      <Link to="/responsividade">Responsividade</Link>
    </div>
  );
}

export default Home;
