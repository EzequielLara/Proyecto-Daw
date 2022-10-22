
import Layout from "../../componentes/Layout"
import Link from "next/link";
import TarjetasLink from '../../componentes/tarjetasLink';
import styles from '../../styles/Home.module.css'

const Home = () => {
    return (
        <>
       <Layout title="familias" className="container">
         <Link href={"/"}>
          <a>
            <img alt="Logo vocablo"
                 src="/logo_vocablo.svg"
                 width="170"
                 className="m-2"
            />
          </a>
          </Link>
            <main className={styles.main}>
                <h3 className="title">Selección de Metodologías:</h3>
                <div className={styles.grid}>
                    <TarjetasLink href="/familias/domain" 
                                titulo="Método Domain" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                    <TarjetasLink href="/familias/fenicio"
                                habilitado={false}
                                titulo="Método 2" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                                anularEnlace
                    />
                    <TarjetasLink href="/familias/fenicio" 
                                titulo="Método 3" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                                anularEnlace
                    />
                    <TarjetasLink href="/familias/fenicio" 
                                titulo="Método 4" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                                anularEnlace
                    />
                    <TarjetasLink href="/familias/fenicio" 
                                titulo="Método 5" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                                anularEnlace
                    />
                    <TarjetasLink href="/familias/fenicio" 
                                titulo="Método 6" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                                anularEnlace
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