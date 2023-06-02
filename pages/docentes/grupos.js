import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";

import { useContext, useEffect } from "react";
import { Usuario } from "../../contexts/contextUsuario";
import { useRouter } from "next/router";

const Grupos = () => {
  const { datos, setDatos } = useContext(Usuario);

  return (
    <>
      {datos && (
        <Layout title="docentes | cursos">
          <Navegacion
            usuario={datos.username}
            loginAuth={datos.loginAuth}
          ></Navegacion>
          <main>
            <h1>Cursos</h1>
          </main>
        </Layout>
      )}
    </>
  );
};

export default Grupos;
