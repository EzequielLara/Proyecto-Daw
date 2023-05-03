import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SessionProvider } from "next-auth/react";
import Context from "../contexts/context";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Context>
        <Head>
          <link rel="stylesheet" href="/fonts/FredokaOne-Regular.ttf" />
        </Head>
        <Component {...pageProps} />
      </Context>
    </SessionProvider>
  );
}

export default MyApp;
