import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

import TarjetasLink from '../componentes/tarjetasLink'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>vocablo</title>
        <meta name="description" content="App aprender a leer" />
        <link rel="icon" href="/icono_vocablo.svg" />
      </Head>
      <main className={styles.main}>
        <Image src="/logo_vocablo.svg" width={700} height={250}/>
        <p className={styles.description}>
         La herramienta para enseñar a leer 
        </p>
        <div className={styles.grid}>
          <TarjetasLink href="/home" 
                        titulo="Comenzar" 
                        parrafo="Accede directamente a los recursos sin necesidad de registrarte"
          />
          <TarjetasLink href="/autenticacion" 
                        titulo="Registrarme" 
                        parrafo="Crea grupos de trabajo y contextos colaborativos de aprendizaje"
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <Link href={"http://localhost:3000/home"}>
          Create by Ezequiel
          Lara
        </Link>
      </footer>
    </div>
  )
}
