import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import GitHub from "../components/Icons/Github";
import { breakpoints, colors, fonts } from "../styles/theme";
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";
// devit

export default function Home() {
  const [user, setUser] = useState(undefined);
  console.log(user);
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        const { avatar, username, email } = user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} />
                login with github
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar}></img>
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 0;
        }
        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
