import Link from "next/link";
import Layout from "../../../../componentes/layouts/Layout";
import TarjetasLink from "../../../../componentes/compartidos/tarjetasLink";
import styles from "../../../../styles/Home.module.css";

const Aplicaciones = () => {
  return (
    <>
      <>
        <div className="imgvocablo">
          <div className="imgvocablo">
            <Link href={"/"}>
              <a>
                <img alt="Logo vocablo" src="/logo_vocablo.svg" width="200" />
              </a>
            </Link>
          </div>
        </div>
        <Layout title="app-doman">
          <main className={styles.main}>
            <div className={styles.grid}>
              <TarjetasLink
                href="/metodologias/doman/app-doman/app1"
                titulo="Aplicación Uno"
                parrafo="Aplicación de ejemplo para metodología Doman"
              />
              <TarjetasLink
                href="/metodologias/doman/app-doman/app2"
                titulo="Aplicación Dos"
                parrafo="Aplicación de ejemplo para metodología Doman"
              />
            </div>
          </main>
        </Layout>
        <style>{`
       @media (max-width:440px){
            .imgvocablo{
              width:100%;
              text-align:center;
              margin-top:15px;
            }      
        }
    `}</style>
      </>
    </>
  );
};

export default Aplicaciones;
