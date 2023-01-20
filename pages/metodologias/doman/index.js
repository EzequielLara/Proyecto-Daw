import Link from "next/link";
import Layout from "../../../componentes/layouts/Layout";
import TarjetasLink from "../../../componentes/compartidos/tarjetasLink";
import styles from "../../../styles/Home.module.css";

const DomainInfo = () => {
  return (
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
      <Layout title="doman">
        <main className={styles.main}>
          <div className={styles.grid}>
            <TarjetasLink
              href="/metodologias/doman/info-doman/info"
              titulo="Info Doman"
              parrafo="Aquí encontrarás toda la información sobre como aplicar este método"
            />
            <TarjetasLink
              href="/metodologias/doman/recursos-doman/recursos"
              titulo="Recursos Doman"
              parrafo="Descarga recursos y amplia la información sobre el método Doman"
            />
            <TarjetasLink
              href="/metodologias/doman/app-doman"
              titulo="app-doman"
              parrafo="Accede a nuestras propuestas educativas para el aula"
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
  );
};

export default DomainInfo;
