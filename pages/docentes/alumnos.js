import { useState } from "react";
import Listado from "../../componentes/Listado";
import Layout from "../../componentes/layouts/Layout";
import ModalAlumno from "../../componentes/modales/ModalAlumno";
import Navegacion from "../../componentes/navegacion/Navegacion";

const Alumnos = () => {
  const [modal, setModal] = useState(true);

  const nuevoAlumno = () => {
    setModal(false);
  };

  return (
    <Layout title="docente | alumnos">
      <Navegacion usuario={"prueba"}></Navegacion>
      <main>
        {modal ? (
          <Listado nuevoAlumno={nuevoAlumno}></Listado>
        ) : (
          <ModalAlumno></ModalAlumno>
        )}
      </main>
    </Layout>
  );
};

export default Alumnos;
