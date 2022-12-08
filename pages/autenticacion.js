import Head from "next/head";
import Formulario from "../componentes/Formulario";
import Eslogan from "../componentes/Eslogan";
import Layout from "../componentes/Layout";

const Autenticacion = () => {
  return (
    <Layout title="login">
      <div className="container">
        <div className="row">
          <div className="col-4 bg-transparent pt-5">
            <Formulario />
          </div>
          <div className="col bg-transparent m-auto pt-5">
            <Eslogan />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Autenticacion;
