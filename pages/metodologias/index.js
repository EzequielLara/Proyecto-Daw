import Layout from "../../componentes/Layout";
import Link from "next/link";
import TarjetasLink from "../../componentes/tarjetasLink";
import styles from "../../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Layout title="metodologías" className="container">
        <Link href={"/"}>
          <a>
            <img
              alt="Logo vocablo"
              src="/logo_vocablo.svg"
              width="170"
              className="m-2"
            />
          </a>
        </Link>
        <main className={styles.main}>
          <h3 className="title">Selección de Metodologías:</h3>
          <div className={styles.grid}>
            <TarjetasLink
              href="/metodologias/domain"
              titulo="Método Doman"
              parrafo="Relaciona palabras con sonidos, objetos e imágenes"
            />
            <TarjetasLink
              href="/metodologias/alfabetico"
              habilitado={false}
              titulo="Método Alfabético"
              parrafo="Estamos trabajando en ello. Proximamente podrás acceder a los recursos"
              anularEnlace
            />
            <TarjetasLink
              href="/metodologias/fonetico"
              titulo="Método Fonético"
              parrafo="Estamos trabajando en ello. Proximamente podrás acceder a los recursos"
              anularEnlace
            />
            <TarjetasLink
              href="/metodologias/fenicio"
              titulo="Método Palabras Completas"
              parrafo="Proximamente podrás acceder a los recursos"
              anularEnlace
            />
            <TarjetasLink
              href="/metodologias/fenicio"
              titulo="Método Global"
              parrafo="Estamos trabajando en ello. Proximamente podrás acceder a los recursos"
              anularEnlace
            />
            <TarjetasLink
              href="/metodologias/fenicio"
              titulo="Página Error"
              parrafo="Página de prueba que muestra la página de error 404 personalizada."
            />
          </div>
        </main>
      </Layout>
      <style>{`
          .title{
            margin-bottom:60px;
          }
       
       `}</style>
    </>
  );
};

export default Home;
