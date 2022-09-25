
import Head from "next/head";
import Formularios from "../componentes/Formularios";

const Autenticacion = () => {
    return (
        <>
            <Head>
                <title>formulario - vocablo</title>
                <meta name="formulario" content="Formulario de registro" />
                <link rel="icon" href="/icono_vocablo.svg"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"></link>
                <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"></link>
            </Head>
           
            <Formularios/>   
          
        </>
    );
};

export default Autenticacion;