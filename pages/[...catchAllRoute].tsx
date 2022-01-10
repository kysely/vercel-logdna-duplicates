import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const CatchAllPage = ({
  route,
  randomValue,
}: {
  route: string;
  randomValue: number;
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vercel + LogDNA duplicates</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SSR + Dynamic Route</h1>

        <p className={styles.description}>
          Handling actual route: <code className={styles.code}>{route}</code>
          <br />
          Random number returned from server side:{" "}
          <code className={styles.code}>{randomValue}</code>
        </p>

        <div className={styles.grid}>
          <Link href="/">
            <a className={styles.card}>
              <h2>Dashboard &rarr;</h2>
              <p>Link to index that redirects to Dashboard.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default CatchAllPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const routeComponents = context.params?.catchAllRoute || "---";

  return {
    props: {
      route:
        "/" +
        (Array.isArray(routeComponents)
          ? routeComponents.join("/")
          : routeComponents),
      randomValue: Math.floor(Math.random() * 1000),
    },
  };
};