import React from "react";
import { Container } from "./styles";
import {
  jsImg,
  tsImg,
  javaImg,
  firebaseImg,
  angularImg,
  reactImg,
  nextImg,
  styleImg,
} from "../../assets/";

import Image from "next/image";

export const Skills = () => {
  const languages = [
    { name: "JavaScript", image: jsImg },
    { name: "React", image: reactImg },
    { name: "NextJS", image: nextImg },
    { name: "Angular", image: angularImg },
    { name: "TypeScript", image: tsImg },
    { name: "Firebase", image: firebaseImg },
    { name: "Styled Components", image: styleImg },
    { name: "Java", image: javaImg },
  ];

  return (
    <Container>
      <div>Most Used Tools</div>
      <div className="skills">
        {languages.map((language) => (
          <button>
            <Image
              src={language.image}
              height={30}
              width={language.name === "NextJS" ? 50 : 30}
            />
            <p>{language.name}</p>
          </button>
        ))}
      </div>
    </Container>
  );
};
