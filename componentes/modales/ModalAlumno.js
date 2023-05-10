import style from "../../styles/ModalAlumnos.module.css";
import { useState, useEffect } from "react";

const ModalAlumno = ({
  cambiarModal,
  animarModal,
  setAnimarModal,
  alumnos,
  setAlumnos,
  alumnoEditar,
  setAlumnoEditar,
}) => {
  const [nombreAlumno, setNombreAlumno] = useState("");
  const [apellidosAlumno, setApellidosAlumno] = useState("");
  const [cursoAlumno, setCursoAlumno] = useState("");
  const [grupoAlumno, setGrupoAlumno] = useState("");
  const [id, setId] = useState("");
  const [cursos, setCursos] = useState([
    "Primero",
    "Segundo",
    "Tercero",
    "Cuarto",
    "Quinto",
  ]);
  const [grupos, setGrupos] = useState(["A", "B", "C"]);

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(alumnoEditar).length > 0) {
      setNombreAlumno(alumnoEditar.nombre);
      setApellidosAlumno(alumnoEditar.apellidos);
      setCursoAlumno(alumnoEditar.curso);
      setGrupoAlumno(alumnoEditar.grupo);
      setId(alumnoEditar._id);
    }
  }, []);

  const ocultarModal = () => {
    setTimeout(() => {
      setAnimarModal();
      setAlumnoEditar({});
      cambiarModal();
    }, 400);
  };
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const generarFecha = () => {
    const fecha = new Date();
    const parametrosFecha = { year: "numeric", month: "long", day: "2-digit" };
    const datoFecha = fecha.toLocaleDateString("es-ES", parametrosFecha);

    return datoFecha;
  };

  const guardarAlumno = () => {
    if (alumnoEditar.id) {
      const alumnoNuevo = {
        id: alumnoEditar.id,
        fecha: generarFecha(),
        nombreAlumno,
        apellidosAlumno,
        cursoAlumno,
        grupoAlumno,
      };
      //Actualizar
      const alumnosActualizados = alumnos.map((alumnoState) =>
        alumnoState.id === alumnoEditar.id ? alumnoNuevo : alumnoState
      );

      setAlumnos(alumnosActualizados);
      setAlumnoEditar({});
      return;
    }
    //Nuevo
    setAlumnos([
      ...alumnos,
      {
        id: generarId(),
        fecha: generarFecha(),
        nombreAlumno,
        apellidosAlumno,
        cursoAlumno,
        grupoAlumno,
      },
    ]);
  };

  const resetearFormularioModal = () => {
    setNombreAlumno("");
    setApellidosAlumno("");
    setCursoAlumno("");
    setGrupoAlumno("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      nombreAlumno.trim() == "" ||
      apellidosAlumno.trim() == "" ||
      cursoAlumno.trim() == "" ||
      grupoAlumno.trim() == ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    guardarAlumno();
    resetearFormularioModal();
    ocultarModal();
  };
  return (
    <>
      <div className={style.modal}>
        <div className={style.cerrar_modal}>
          <img src="/cerrar.svg" alt="cerrar modal" onClick={ocultarModal} />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`${style.formulario} ${
            animarModal ? style.animar : style.cerrar
          }`}
        >
          <legend>
            {alumnoEditar.nombre ? "Editar Alumno" : "Nuevo Alumno"}
          </legend>
          <div className="text-center mb-3">
            <label className="w-25" htmlFor="nombre">
              Nombre:
            </label>
            <input
              className="w-50 p-2 estiloInput"
              id="nombre"
              type="text"
              placeholder="Nombre del Alumno"
              value={nombreAlumno}
              onChange={(e) => {
                setNombreAlumno(e.target.value);
              }}
            />
          </div>
          <div className="text-center mb-3">
            <label className="w-25" htmlFor="apellidosAlumno">
              Apellidos:
            </label>
            <input
              className="w-50 p-2 estiloInput"
              type="text"
              placeholder="Apellidos del Alumno"
              value={apellidosAlumno}
              onChange={(e) => {
                setApellidosAlumno(e.target.value);
              }}
            />
          </div>
          <div className="text-center ">
            <div className="mb-3">
              <label className="w-25" htmlFor="cursoAlumno">
                Curso:
              </label>
              <select
                className="w-50 p-2 estiloSelect"
                id="cursoAlumno"
                value={cursoAlumno}
                onChange={(e) => {
                  setCursoAlumno(e.target.value);
                }}
              >
                <option value="">Curso</option>
                {cursos.map((curso, index) => (
                  <option key={index} value={curso}>
                    {curso}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="w-25" htmlFor="grupoAlumno">
                Grupo:
              </label>
              <select
                className="w-50 p-2 estiloSelect"
                id="grupoAlumno"
                value={grupoAlumno}
                onChange={(e) => {
                  setGrupoAlumno(e.target.value);
                }}
              >
                <option value="">Grupo</option>
                {grupos.map((grup, index) => (
                  <option key={index} value={grup}>
                    {grup}
                  </option>
                ))}
              </select>
            </div>

            {error && <h5 className="uno">*No se admiten campos vacíos</h5>}
            <input
              id="boton"
              type="submit"
              value={alumnoEditar.nombre ? "Modificar Alumno" : "Añadir Alumno"}
            />
          </div>
        </form>
      </div>
      <style>{`
          .uno{
            color:tomato;
          }
          .estiloInput{
            background-color:transparent;
            border: 2px solid white;
            color:white;
            font-size:1.2rem;
          }
          .estiloSelect{
            border-radius: 10px;
            border: 2px solid white;
            color:black;
            font-size:1.2rem;
            text-align:center;
          }
      `}</style>
    </>
  );
};
export default ModalAlumno;
