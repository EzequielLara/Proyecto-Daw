import Head from "next/head";
import { useEffect, useState } from "react";
import Spinner from "../compartidos/Spinner";
import { Suspense } from "react";

const LayoutMainContent = ({ children, title, content }) => {
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
            <meta name="description" content={content} />
            <link rel="icon" href="/icono_vocablo.svg" />
            <link
              href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
              rel="stylesheet"
            />
          </Head>
          <main>
            <div>{children}</div>
          </main>
        </>
      ) : (
        <Suspense fallback={<div>Cargando...</div>}>
          <Spinner />
        </Suspense>
      )}
    </>
  );
};

export default LayoutMainContent;
