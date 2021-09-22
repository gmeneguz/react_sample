import React from "react";
import Navbar from "./Navbar";
import { Container, ContentOne } from "./styles";

function Responsiveness() {
  return (
    <Container>
      <Navbar />
      <ContentOne>
        <div className="left">
          <img
            src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
            alt="sample"
          />
        </div>

        <div className="right">
          <span>Texto 1</span>
          <span>Descrição Texto 2</span>
        </div>
      </ContentOne>
    </Container>
  );
}

export default Responsiveness;
