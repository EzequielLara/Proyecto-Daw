import Listado from "../../componentes/Listado";
import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";

const Alumnos = () => {
  return (
    <Layout title="docente | alumnos">
      <Navegacion usuario={"prueba"}></Navegacion>
      <main>
        <Listado></Listado>
      </main>
    </Layout>
  );
};

export default Alumnos;
