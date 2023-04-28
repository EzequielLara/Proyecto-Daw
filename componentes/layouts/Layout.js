import Head from "next/head";
import { useEffect, useState } from "react";
import Spinner from "../compartidos/Spinner";
import { Suspense } from "react";

const Layout = ({ children, title }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Head>
            <title>vocablo | {title}</title>
            <meta name="description" content="teaching reading" />
            <link rel="icon" href="/icono_vocablo.svg" />
            <link
              href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
              rel="stylesheet"
            />
          </Head>
          <div>{children}</div>
        </>
      ) : (
        <Suspense fallback={<div>Cargando...</div>}>
          <Spinner />
        </Suspense>
      )}
    </>
  );
};

export default Layout;
