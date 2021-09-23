import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import { breakpoints, colors, fonts } from "../styles/theme";
// devit

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/julian-logo.svg" alt="logo" />
          <h1>Devter</h1>
          <h2>
            Talk about development <br /> with developers 👨‍💻👩‍💻
          </h2>
          <Button>login with github</Button>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 0;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
