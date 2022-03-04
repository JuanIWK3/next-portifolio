import type { NextPage } from "next";
import Head from "next/head";
import { BestProjects } from "../components/BestProjects";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Presentation } from "../components/Presentation";
import { Skills } from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Juan Dev Contact</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default Home;
