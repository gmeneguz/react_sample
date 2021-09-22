import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <p>
        <span>🚀</span>
        ReactJS
      </p>
      <Link to="/JSX">JSX</Link>
      <Link to="/state">Estado</Link>
      <Link to="/props">Props</Link>
      <Link to="/effects">Effects</Link>
      <Link to="/responsividade">Responsividade</Link>
    </Container>
  );
}

export default Home;
