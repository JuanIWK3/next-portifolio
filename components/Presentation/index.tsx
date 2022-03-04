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
          Development of responsive, functional web applications that please its
          users, using the best practices and techniques available on the market
        </p>
      </div>
    </Container>
  );
};
