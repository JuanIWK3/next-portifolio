import React from "react";
import { Container } from "./styles";

export const Presentation = () => {
  return (
    <Container>
      <div className="front-text">
        <p
          style={{
            color: "#0070f3",
            fontWeight: "bold",
            margin: "16px 0",
            fontFamily: "Montserrat Alternates",
          }}
        >
          JUAN ISRAEL
        </p>
        <p
          style={{
            fontSize: "56px",
            fontWeight: 900,
            margin: "16px 0",
            fontFamily: "Montserrat",
          }}
        >
          Frontend Developer
        </p>
        <p
          style={{
            margin: "16px 0",
            textAlign: "center",
          }}
        >
          Desenvolvimento de aplicações web responsivas, funcionais que agradam
          aos seus usuários, usando das melhores práticas e técnicas existentes
          no mercado
        </p>
      </div>
    </Container>
  );
};
