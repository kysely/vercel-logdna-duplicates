import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const CatchAllPage = ({
  route,
  randomValue,
}: {
  route: string;
  randomValue: number;
}) => {
  return (
    <div className="container">
      <Head>
        <title>Vercel + LogDNA duplicates</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>SSR + Dynamic Route</h1>

        <p className="description">
          Handling actual route: <code>{route}</code>
          <br />
          Random number returned from server side: <code>{randomValue}</code>
        </p>

        <div className="grid">
          <Link href="/">
            <a className="card">
              <h2>Dashboard &rarr;</h2>
              <p>Link to index that redirects to Dashboard.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="logo">
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
