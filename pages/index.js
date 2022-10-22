import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import TarjetasLink from '../componentes/tarjetasLink'

export default function Principal() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vocablo</title>
        <meta name="description" content="enseñar a leer" />
        <link rel="icon" href="/icono_vocablo.svg" />
      </Head>
      <main className={styles.main}>
        <Image src="/logo_vocablo.svg" width={700} height={250}/>
        <p className={styles.description}>
         La herramienta educativa para enseñar a leer 
        </p>
        <div className={styles.grid}>
          <TarjetasLink href="/familias" 
                        titulo="Comenzar" 
                        parrafo="Accede directamente a recursos sin necesidad de registrarte"
          />
          <TarjetasLink href="/autenticacion" 
                        titulo="Registrarme" 
                        parrafo="Guarda los progresos y crea contextos colaborativos de aprendizaje"              
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/EzequielLara"
           target="_blank"
           rel="noreferrer"
           className='text-decoration-none text-dark'
        >- Create by EzequielLara -
        </a>
      </footer>

    </div>
  )
}
