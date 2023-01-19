import Head from "next/head";
import { useEffect, useState } from "react";

const LayoutInfo = ({ children, title, content }) => {
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
          </Head>
          <main>
            <div>{children}</div>
          </main>
        </>
      ) : (
        <small>Cargando página...</small>
      )}
    </>
  );
};

export default LayoutInfo;
