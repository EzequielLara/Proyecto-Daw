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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      [nombreAlumno, apellidosAlumno, cursoAlumno, grupoAlumno].includes(
        "" || undefined
      )
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
          <div className={style.campo}>
            <label htmlFor="nombre">Nombre Alumno</label>
            <input
              id="nombre"
              type="text"
              placeholder="Añade el Nombre del Alumno"
              value={nombreAlumno}
              onChange={(e) => {
                setNombreAlumno(e.target.value);
              }}
            />
          </div>
          <div className={style.campo}>
            <label htmlFor="apellidosAlumno">Apellidos Alumno</label>
            <input
              type="text"
              placeholder="Añade apellidos del Alumno"
              value={apellidosAlumno}
              onChange={(e) => {
                setApellidosAlumno(e.target.value);
              }}
            />
          </div>
          <div className={style.campo}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <label htmlFor="cursoAlumno">Curso:</label>
                <select
                  id="cursoAlumno"
                  value={cursoAlumno}
                  onChange={(e) => {
                    setCursoAlumno(e.target.value);
                  }}
                >
                  <option value="">-- Seleccione --</option>
                  {cursos.map((cur, index) => (
                    <option key={index} value={cur}>
                      {cur}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="grupoAlumno">Grupo:</label>
                <select
                  id="grupoAlumno"
                  value={grupoAlumno}
                  onChange={(e) => {
                    setGrupoAlumno(e.target.value);
                  }}
                >
                  <option value="">-- Seleccione --</option>
                  {grupos.map((grup, index) => (
                    <option key={index} value={grup}>
                      {grup}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {error && <h3 className="uno">*No se admiten campos vacíos</h3>}
            <input
              id="boton"
              type="submit"
              value={alumnoEditar.nombre ? "Modificar Alumno" : "Añadir Alumno"}
            />
          </div>
        </form>
      </div>
      <style>
        {`
              .uno{
                color:tomato;
                text-align: center;
              }
         @media (min-width: 768px) {

          }
      `}
      </style>
    </>
  );
};
export default ModalAlumno;
