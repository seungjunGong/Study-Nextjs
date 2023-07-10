import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>clone netflix</title>
        <meta name="description" content="Clone by netflix app" />
        <meta name="keywords" content="클론, 웹사이트, 페이지, 영화" />
        <link rel="icon" href="/ic_netflix.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
