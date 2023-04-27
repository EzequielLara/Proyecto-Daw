import { useState, useEffect } from "react";
import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import Donut from "../../componentes/dashboard/donut";
import Radargrafico from "../../componentes/dashboard/radargrafico";
import Spinner from "../../componentes/compartidos/Spinner";
import { Suspense } from "react";

const Dashboard = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [cursos, setCursos] = useState(["Primero", "Segundo", "Tercero"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch("/api/alumnos");
      const data = await response.json().catch((e) => {
        setLoading(false);
        console.log(e.error);
      });
      setAlumnos(data);
      setLoading(false);
    };
    fetchDatos();
  }, []);
  return (
    <>
      <Layout title="docente | gráficos">
        <Navegacion usuario={"prueba"}></Navegacion>
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
                <div className="col-3 m-auto text-center mb-5">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option defaultValue={""}>Selecciona Curso</option>
                    {cursos &&
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
                  >
                    <option defaultValue={""}>Selecciona Grupo</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-6 m-auto text-center mb-5">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option defaultValue={""}>Selecciona Alumno</option>
                    {alumnos &&
                      alumnos.map((alumno) => (
                        <option key={alumno._id} value={alumno.nombre}>
                          {alumno.nombre} {alumno.apellidos}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-4 m-auto shadow-lg bg-white rounded mb-5">
                  <div className="">
                    <h4 className="p-3 text-center text-secondary">
                      Gráfico 1
                    </h4>
                    <Donut></Donut>
                  </div>
                </div>
                <div className="col-4 m-auto shadow-lg bg-white rounded mb-5">
                  <div className="">
                    <h4 className="p-3 text-center text-secondary">
                      Gráfico 2
                    </h4>
                    <Radargrafico></Radargrafico>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col mb-5">
                  <div className="card shadow-lg efecto">
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
                  <div className="card shadow-lg efecto">
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
                <div className="col ">
                  <div className="card shadow-lg efecto">
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
                  <div className="card shadow-lg efecto">
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
                  <div className="card shadow-lg efecto">
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
                <div className="col ">
                  <div className="card shadow-lg efecto">
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
