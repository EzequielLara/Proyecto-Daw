
import Layout from "../../componentes/Layout"
import Link from "next/link";
import TarjetasLink from '../../componentes/tarjetasLink';
import styles from '../../styles/Home.module.css'

const Home = () => {
    return (
        <>
       <Layout title="familias">
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
                <div className={styles.grid}>
                    <TarjetasLink href="/familias/domain" 
                                titulo="Domain" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                    <TarjetasLink href="#silabio" 
                                titulo="Silabio" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                    <TarjetasLink href="#Montesori" 
                                titulo="Montesori" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                    <TarjetasLink href="#fenicio" 
                                titulo="Fenicio" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                </div>
            </main>
       </Layout>
       </> 
       
         
    );
};

export default Home;