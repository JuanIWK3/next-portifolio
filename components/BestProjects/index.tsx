import React from "react";
import { Container } from "./styles";
import { calculatorImg, csgoImg, todoImg, webchatImg } from "../../assets/";
import Image from "next/image";
import Link from "next/link";

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
          <div>
            <a
              href="https://vercel.com/juaniwk3/angular-calculator"
              target="_blank"
            >
              <div className="project">
                <p>Calculator</p>
                <Image src={calculatorImg} height={450} width={300} />
              </div>
            </a>
            <a href="https://csgo-guns-next.vercel.app/" target="_blank">
              <div className="project">
                <p>CSGO Guns</p>
                <Image src={csgoImg} height={450} width={300} />
              </div>
            </a>
          </div>
          <div>
            <a href="https://angular-todo-jiwk3.vercel.app/" target="_blank">
              <div className="project">
                <p>To Do</p>
                <Image src={todoImg} height={450} width={300} />
              </div>
            </a>
            <a href="https://vercel.com/juaniwk3/webchat" target="_blank">
              <div className="project">
                <p>Web Chat</p>
                <Image src={webchatImg} height={450} width={300} />
              </div>
            </a>
          </div>
        </div>
        <div>
          <Link passHref href="projects">
            <button className="all-projects-button">All Projects</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
