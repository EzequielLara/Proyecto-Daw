import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";

const Grupos = () => {
  return (
    <Layout title="docentes | cursos">
      <Navegacion usuario="prueba"></Navegacion>
      <main>
        <h1>Cursos</h1>
      </main>
    </Layout>
  );
};

export default Grupos;
