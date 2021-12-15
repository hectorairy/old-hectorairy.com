import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog, tutoriales y experiencias | Héctor Airy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al blog de{" "}
          <a
            href="https://sites.hectorairy.com/"
            target="_blank"
            rel="noreferrer"
          >
            Héctor Airy
          </a>
        </h1>

        <p className={styles.description}>
          Actualmente estamos en contrucción, pero estaremos en línea en breve
          😁
        </p>
      </main>
    </div>
  );
}
