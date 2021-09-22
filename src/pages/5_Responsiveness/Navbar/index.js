import React, { useState } from "react";
import {
  Container,
  HamburguerButton,
  Item,
  Logo,
  NavbarItems,
  RightSide,
} from "./styles";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Logo></Logo>
      <RightSide>
        <NavbarItems showResponsiveMenu={isMenuOpen}>
          <Item>Início</Item>
          <Item>Projeto</Item>
          <Item>Sobre</Item>
          <Item>
            <button>Login</button>
          </Item>
        </NavbarItems>
        <HamburguerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "X" : "="}
        </HamburguerButton>
      </RightSide>
    </Container>
  );
}

export default Navbar;
