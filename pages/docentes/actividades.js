import { useState, useEffect } from "react";
import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import Spinner from "../../componentes/compartidos/Spinner";
import { Suspense } from "react";
import { Usuario } from "../../contexts/contextUsuario";
import { useContext } from "react";
import { useRouter } from "next/router";

const Evaluacion = () => {
  // const [alumnos, setAlumnos] = useState([]);
  // const [cursos, setCursos] = useState(["Primero", "Segundo", "Tercero"]);
  // const [grupos, setGrupos] = useState(["A", "B", "C"]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // const [seleccionCurso, setSeleccionCurso] = useState(false);
  // const [seleccionGrupo, setSeleccionGrupo] = useState(false);

  // const [valueCurso, setValueCurso] = useState("Curso");
  // const [valueGrupo, setValueGrupo] = useState("Grupo");
  // const [valueAlumno, setValueAlumno] = useState("Alumno");

  // useEffect(() => {
  //   const fetchDatos = async () => {
  //     const response = await fetch("/api/alumnos");
  //     const data = await response.json().catch((e) => {
  //       setLoading(false);
  //     });
  //     setAlumnos(data);
  //     setLoading(false);
  //   };
  //   fetchDatos();
  // }, []);

  // useEffect(() => {
  //   if (valueGrupo === "Grupo") {
  //     setSeleccionGrupo(false);
  //     setValueAlumno("Alumno");
  //   } else {
  //     setSeleccionGrupo(true);
  //   }
  //   if (valueCurso === "Curso") {
  //     setSeleccionCurso(false);
  //     setValueGrupo("Grupo");
  //     setValueAlumno("Alumno");
  //   } else {
  //     setSeleccionCurso(true);
  //   }
  // }, [valueAlumno, valueCurso, valueGrupo]);

  const { datos, setDatos } = useContext(Usuario);

  useEffect(() => {
    if (datos === undefined || datos === null) {
      router.push("/signin");
    }
  }, []);

  return (
    <>
      {datos && (
        <Layout title="docente | evaluación">
          <Navegacion usuario={datos.usuario}></Navegacion>
          <main>
            <h3 className="m-3 title mb-5">Evaluación Inicial</h3>
            {/* {!loading ? (
            <div className="m-5">
              <Suspense fallback={<div>Cargando...</div>}>
                <Spinner />
              </Suspense>
            </div>
          ) : (
            <div className=" container my-3">
              <div className="row">
                <div className="col-3 m-auto text-center my-5">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={valueCurso}
                    onChange={(e) => {
                      setValueCurso(e.target.value);
                    }}
                  >
                    <option value="Curso">Curso</option>
                    {cursos &&
                      cursos.length > 0 &&
                      cursos.map((curso, index) => (
                        <option key={index} value={curso}>
                          {curso}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-3 m-auto text-center mb-5">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={valueGrupo}
                    onChange={(e) => {
                      setValueGrupo(e.target.value);
                    }}
                    disabled={!seleccionCurso}
                  >
                    <option value="Grupo">Grupo</option>
                    {grupos &&
                      grupos.length > 0 &&
                      grupos.map((grupo, index) => (
                        <option key={index} value={grupo}>
                          {grupo}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-6 m-auto text-center mb-5">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={valueAlumno}
                    onChange={(e) => {
                      setValueAlumno(e.target.value);
                    }}
                    disabled={!seleccionGrupo}
                  >
                    <option value="Alumno">Alumno</option>
                    {alumnos &&
                      alumnos.length > 0 &&
                      alumnos.map((alumno) => (
                        <option key={alumno._id} value={alumno.nombre}>
                          {alumno.nombre} {alumno.apellidos}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="row">
                {valueAlumno !== "Alumno" ? (
                  <h4 className="m-auto text-center mb-5 text-capitalize text-bg-light p-3 w-75 text-dark">
                    {valueAlumno}
                  </h4>
                ) : (
                  <h4 className="text-center mb-5">Seleccione un alumno</h4>
                )}
              </div>
            </div>
          )} */}
            <div className="row">
              <div className="col-md-4 col-sm-12">Columna 1</div>
              <div className="col">Columna 2</div>
            </div>
          </main>
        </Layout>
      )}
      <style>{`
         .title{
            margin-bottom:60px;
            color:#247c8c;
            text-align:center;
            }
          @media (max-width:440px){
            .title{
              width:100%;
              text-align:center;
              margin-top:0px;
            }
        .efecto:hover{
          border: 2px solid orange;
          b
        }
      `}</style>
    </>
  );
};

export default Evaluacion;
