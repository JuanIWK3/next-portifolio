import React from "react";
import { Container } from "./styles";

export const BestProjects = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <div>
          <h1 className="title">Highlight Projects</h1>
          <p className="subtitle">
            I highlighted some of the most outstanding projects that were
            developed by me
          </p>
        </div>
        <div className="projects">
          <div className="project">CSGO</div>
          <div className="project">WebChat</div>
          <div className="project">HomeMovieFestival</div>
          <div className="project">BlackJack</div>
        </div>
        <div></div>
      </div>
    </Container>
  );
};
