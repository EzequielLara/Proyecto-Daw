import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { SessionProvider } from "next-auth/react";
import Context from "../contexts/context";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </SessionProvider>
  );
}

export default MyApp;
