import { useState, useEffect } from "react";
import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import Donut from "../../componentes/dashboard/donut";
import Radargrafico from "../../componentes/dashboard/radargrafico";
import Spinner from "../../componentes/compartidos/Spinner";
import { Suspense } from "react";
import { useRouter } from "next/router";

import { useContext } from "react";
import { Usuario } from "../../contexts/contextUsuario";

const Dashboard = () => {
  const { datos, setDatos } = useContext(Usuario);
  const router = useRouter();

  const [alumnos, setAlumnos] = useState([]);
  const [cursos, setCursos] = useState(["Primero", "Segundo", "Tercero"]);
  const [grupos, setGrupos] = useState(["A", "B", "C"]);
  const [loading, setLoading] = useState(true);

  const [seleccionCurso, setSeleccionCurso] = useState(false);
  const [seleccionGrupo, setSeleccionGrupo] = useState(false);

  const [valueCurso, setValueCurso] = useState("Curso");
  const [valueGrupo, setValueGrupo] = useState("Grupo");
  const [valueAlumno, setValueAlumno] = useState("Alumno");

  useEffect(() => {
    if (datos === undefined || datos === null) {
      router.push("/signin");
    }
  }, []);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch("/api/alumnos");
      const data = await response.json().catch((e) => {
        setLoading(false);
      });
      setAlumnos(data);
      setLoading(false);
    };
    fetchDatos();
  }, []);

  useEffect(() => {
    if (valueGrupo === "Grupo") {
      setSeleccionGrupo(false);
      setValueAlumno("Alumno");
    } else {
      setSeleccionGrupo(true);
    }
    if (valueCurso === "Curso") {
      setSeleccionCurso(false);
      setValueGrupo("Grupo");
      setValueAlumno("Alumno");
    } else {
      setSeleccionCurso(true);
    }
  }, [valueAlumno, valueCurso, valueGrupo]);

  return (
    <>
      {datos && (
        <Layout title="docente | estadísticas">
          <Navegacion
            usuario={datos.usuario}
            loginAuth={datos.loginAuth}
          ></Navegacion>

          <main>
            {loading ? (
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
                    <h4 className="m-auto text-center mb-5 text-bg-light p-3 w-75 text-dark">
                      Resultados de{" "}
                      <span className="text-capitalize">{valueAlumno}</span>
                    </h4>
                  ) : (
                    <h4 className="text-center mb-5">Seleccione un alumno</h4>
                  )}
                  <div className="col-4 m-auto shadow-lg bg-white rounded mb-5">
                    <div className="">
                      <h4 className="p-3 text-center text-secondary">
                        Gráfico 1
                      </h4>
                      {/* <Donut></Donut> */}
                    </div>
                  </div>
                  <div className="col-4 m-auto shadow-lg bg-white rounded mb-5">
                    <div className="">
                      <h4 className="p-3 text-center text-secondary">
                        Gráfico 2
                      </h4>
                      {/* <Radargrafico></Radargrafico> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-5">
                    <div className="card shadow-lg efecto" key="parametro1">
                      <div className="card-body">
                        <h5 className="card-title">Parámetro 1</h5>
                        <span>320 puntos</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card shadow-lg efecto" key="parametro2">
                      <div className="card-body">
                        <h5 className="card-title">Parámetro 2</h5>
                        <span>227 puntos</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-lg efecto" key="parametro3">
                      <div className="card-body">
                        <h5 className="card-title">Parámetro 3</h5>
                        <span>77 puntos</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "38%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-5">
                    <div className="card shadow-lg efecto" key="parametro4">
                      <div className="card-body">
                        <h5 className="card-title">Parámetro 4</h5>
                        <span>2254 puntos</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card shadow-lg efecto" key="parametro5">
                      <div className="card-body">
                        <h5 className="card-title">Parámetro 5</h5>
                        <span>279 puntos</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card shadow-lg efecto" key="parametro6">
                      <div className="card-body">
                        <h5 className="card-title">Parámetro 6</h5>
                        <span>528 puntos</span>
                        <div className="progress">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "38%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </Layout>
      )}
      <style>{`
      
        .efecto:hover{
          border: 2px solid orange;
          b
        }
      `}</style>
    </>
  );
};

export default Dashboard;
