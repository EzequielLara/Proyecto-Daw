import Link from "next/link";
import Layout from "../../../componentes/Layout";
import TarjetasLink from "../../../componentes/tarjetasLink";
import styles from '../../../styles/Home.module.css'

const DomainInfo = () => {
    return (
        <>
         <Link href={"/"}>
          <a>
            <img alt="Logo vocablo"
                 src="/logo_vocablo.svg"
                 width="170"
                 className="m-2"
            />
          </a>
          </Link>
       <Layout title="domain">
            <main className={styles.main}>
                <div className={styles.grid}>
                    <TarjetasLink href="/familias/domain/info" 
                                titulo="Info Domain" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                    <TarjetasLink href="/familias/domain/app-domain" 
                                titulo="app-domain" 
                                parrafo="Accede directamente a los recursos sin necesidad de registrarte"
                    />
                </div>
            </main>
       </Layout>
       </> 
    );
};

export default DomainInfo;