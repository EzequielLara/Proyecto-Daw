import { useEffect, useState } from "react";
import Listado from "../../componentes/Listado";
import Layout from "../../componentes/layouts/Layout";
import ModalAlumno from "../../componentes/modales/ModalAlumno";
import Navegacion from "../../componentes/navegacion/Navegacion";

const Alumnos = () => {
  const [modal, setModal] = useState(true);
  const [animarModal, setAnimarModal] = useState(true);
  const [alumnos, setAlumnos] = useState([
    { nombre: "juan", apellidos: "perez perez", curso: "PRIMERO", grupo: "A2" },
    {
      nombre: "Maria",
      apellidos: "perez perez",
      curso: "SEGUNDO",
      grupo: "A2",
    },
    {
      nombre: "Antonio",
      apellidos: "perez perez",
      curso: "TERCERO",
      grupo: "A2",
    },
    {
      nombre: "Julieta",
      apellidos: "perez perez",
      curso: "CUARTO",
      grupo: "A2",
    },
    {
      nombre: "Silvia",
      apellidos: "perez perez",
      curso: "QUINTO",
      grupo: "A2",
    },
  ]);
  const [alumnoEditar, setAlumnoEditar] = useState({});

  const nuevoAlumno = (alumno) => {
    const alum = alumno;
    setAlumnoEditar(alum);
    setModal(!modal);
  };

  const cambiarModal = () => {
    setModal(!modal);
  };
  const cambiarAnimarModal = () => {
    setAnimarModal(!modal);
  };

  return (
    <Layout title="docente | alumnos">
      <Navegacion usuario={"prueba"}></Navegacion>
      <main>
        {modal ? (
          <Listado nuevoAlumno={nuevoAlumno}></Listado>
        ) : (
          <ModalAlumno
            cambiarModal={cambiarModal}
            animarModal={animarModal}
            setAnimarModal={cambiarAnimarModal}
            alumnos={alumnos}
            alumnoEditar={alumnoEditar}
            setAlumnoEditar={setAlumnoEditar}
          ></ModalAlumno>
        )}
      </main>
    </Layout>
  );
};

export default Alumnos;
