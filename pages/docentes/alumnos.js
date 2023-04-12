import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";

const Alumnos = () => {
  return (
    <Layout title="docente | alumnos">
      <Navegacion usuario={"prueba"}></Navegacion>
      <main>
        <h1>Alumnos</h1>
      </main>
    </Layout>
  );
};

export default Alumnos;
