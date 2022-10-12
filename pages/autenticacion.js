
import Head from "next/head";
import Formulario from "../componentes/Formulario";
import Eslogan from '../componentes/Eslogan';

const Autenticacion = () => {
    return (
        <>
            <Head>
                <title>vocablo - formulario</title>
                <meta name="formulario" content="Formulario de registro" />
                <link rel="icon" href="/icono_vocablo.svg"></link>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-4 bg-transparent pt-5">
                        <Formulario/>
                    </div>
                    <div className="col bg-transparent m-auto pt-5">
                         <Eslogan/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Autenticacion;