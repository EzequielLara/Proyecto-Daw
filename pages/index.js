import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import TarjetasLink from "../componentes/tarjetasLink";
import Transicion from "../componentes/animaciones-transiciones/transicion";

export default function Principal() {
  return (
    <>
      {/* <Transicion></Transicion> */}
      <div className={styles.container}>
        <Head>
          <title>vocablo</title>
          <meta name="description" content="enseñar a leer" />
          <link rel="icon" href="/icono_vocablo.svg" />
        </Head>
        <main className={styles.main}>
          <Image
            src="/logo_vocablo.svg"
            width={700}
            height={250}
            alt="logo vocablo"
          />
          <p className={styles.description}>
            La herramienta educativa para enseñar a leer
          </p>
          <div className={styles.grid}>
            <TarjetasLink
              href="/metodologias"
              titulo="Comenzar"
              parrafo="Accede directamente a recursos sin necesidad de registrarte"
            />
            <TarjetasLink
              href="/autenticacion"
              titulo="Registrarme"
              parrafo="Guarda los progresos y crea contextos colaborativos de aprendizaje"
            />
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://github.com/EzequielLara"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            - Create by EzequielLara -
          </a>
          <a
            href="https://github.com/EzequielLara/Proyecto-Daw"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <span className="p-2">¿Quieres colaborar?</span>
            <Image src="/github-mark/github-mark.svg" width={30} height={30} />
          </a>
        </footer>
      </div>
    </>
  );
}
