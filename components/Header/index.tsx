import React from "react";
import { Container } from "./styles";
import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <button className="logo">Juan</button>
      </Link>
      <div className="buttons">
        <Link href="projects">
          <button>Projects</button>
        </Link>

        <Link href="contact">
          <button>Contact</button>
        </Link>
      </div>
    </Container>
  );
};
