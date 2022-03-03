import React from "react";
import { Container } from "./styles";
import Link from "next/link";

export const Header = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <button className="logo">Juan</button>
      </Link>
      <div className="buttons">
        <Link href="projects" passHref>
          <button>Projects</button>
        </Link>

        <Link href="contact" passHref>
          <button>Contact</button>
        </Link>
      </div>
    </Container>
  );
};
