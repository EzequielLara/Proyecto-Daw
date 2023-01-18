import Link from "next/link";
import Layout from "../../../componentes/Layout";
import TarjetasLink from "../../../componentes/tarjetasLink";
import styles from "../../../styles/Home.module.css";

const DomainInfo = () => {
  return (
    <>
      <Link href={"/"}>
        <a>
          <img
            alt="Logo vocablo"
            src="/logo_vocablo.svg"
            width="200"
            className="m-2"
          />
        </a>
      </Link>
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
    </>
  );
};

export default DomainInfo;
