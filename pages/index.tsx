import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BestProjects } from "../components/BestProjects";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { Skills } from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Juan Dev</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Presentation />
        <Skills />
        <BestProjects />
        <div className="contact-home">
          <Link href="contact" passHref>
            <button>Entre em contato</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
