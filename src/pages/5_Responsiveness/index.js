import React from "react";
import Navbar from "./Navbar";
import { Container, ContentOne, ContentTwo } from "./styles";

function Responsiveness() {
  return (
    <Container>
      <Navbar />
      <ContentOne>
        <div className="left">
          <img
            src="https://images2.alphacoders.com/474/474206.jpg"
            alt="sample"
          />
        </div>

        <div className="right">
          <h2>JUNTE-SE À BATALHA DOS ANCESTRAIS</h2>
          <p>
            Todos os dias, milhões de jogadores ao redor do mundo entram na
            batalha como um dos mais de 100 heróis de Dota em uma batalha entre
            equipes de cinco jogadores. Dota 2 é o jogo multijogador de ação e
            estratégia em tempo real mais profundo já feito, e há sempre uma
            nova estratégia ou tática a ser descoberta. É completamente gratuito
            para jogar e assim sempre será — comece a defender o seu Ancestral
            já.
          </p>
        </div>
      </ContentOne>
      <ContentTwo>
        <div className="left">
          <img
            src="https://images.alphacoders.com/522/522959.jpg"
            alt="sample"
          />
        </div>

        <div className="right">
          <h2>DRAGON KNIGHT</h2>
          <p>
            Quando ele toma a sua assustadora forma de dragão, o Dragon Knight
            aterroriza qualquer um que o encarar. Forte e adaptável, ele pode
            atordoar os seus inimigos e queimar todos à sua frente, muitas vezes
            dando aos seus aliados a situação que precisam para levá-los à
            vitória.
          </p>
        </div>
      </ContentTwo>
    </Container>
  );
}

export default Responsiveness;
