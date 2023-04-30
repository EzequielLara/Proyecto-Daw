import { useEffect, useState } from "react";
import SearchBox from "./compartidos/SearchBox";
import Spinner from "../componentes/compartidos/Spinner";
import { Suspense } from "react";

const Listado = ({ nuevoAlumno }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [paginaActual, setPaginaActual] = useState(1);
  const [numElementosPorPagina, setNumElementosPorPagina] = useState(5);
  const [numTotalPaginas, setNumTotalPaginas] = useState(null);

  const [datosPaginados, setDatosPaginados] = useState([]);
  const [seleccionBuscador, setSeleccionBuscador] = useState(null);

  const setSeleccion = (e) => {
    setSeleccionBuscador(e);
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    const fetchDatos = async () => {
      const response = await fetch("/api/alumnos");
      const data = await response.json();
      setAlumnos(data);
      const totalPaginas = Math.ceil(data.length / numElementosPorPagina);
      setNumTotalPaginas(totalPaginas);
      setLoading(false);
    };
    fetchDatos();
  }, []);

  useEffect(() => {
    const inicio = (paginaActual - 1) * numElementosPorPagina;
    const fin = inicio + numElementosPorPagina;
    const datosPaginados = alumnos.slice(inicio, fin);
    setDatosPaginados(datosPaginados);
  }, [paginaActual, numElementosPorPagina, alumnos]);

  const cambiarPagina = (direccion) => {
    if (direccion === "siguiente") {
      setPaginaActual(paginaActual + 1);
    } else {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <>
      <div className="container w-auto mt-5">
        <div className="row justify-content-center align-items-center ">
          <div className="col-3 ">
            <h4 className="colorTexto">Alumnos</h4>
          </div>
          <div className="col-1 text-center">
            <span
              className="material-icons colorIcono"
              data-toggle="tooltip"
              data-placement="top"
              title="Crear alumno nuevo"
              onClick={() => {
                nuevoAlumno({});
              }}
            >
              person_add
            </span>
          </div>
          <div className="col-8 text-end">
            <SearchBox
              suggestions={alumnos}
              setSeleccion={setSeleccion}
            ></SearchBox>
          </div>
        </div>
        <hr className="pb-4"></hr>
        <ul className="list-group zindex ">
          {(datosPaginados.length > 0 && !seleccionBuscador) ||
          (seleccionBuscador && seleccionBuscador.nombre === "todos")
            ? datosPaginados.map((alumno) => (
                <li
                  className="list-group-item m-2 shadow-sm rounded lihover"
                  key={alumno._id}
                >
                  <div className="card-body">
                    <div className="row justify-content-center align-items-center ">
                      <div className="col-4  ps-4">
                        <h5 className="card-title">{alumno.nombre}</h5>
                        <p className="card-subtitle font-weight-light colorTexto">
                          {alumno.apellidos}
                        </p>
                      </div>
                      <div className="col-4  text-center">
                        <small className="card-subtitle text-capitalize">
                          {alumno.curso} - {alumno.grupo}
                        </small>
                      </div>
                      <div className="col-4">
                        <div className="m-auto text-end pe-4">
                          <button
                            type="button"
                            className="border-0 bg-transparent text-secondary material-icons me-2 iconhover"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Ver mas información"
                          >
                            info
                          </button>
                          <button
                            type="button"
                            className="border-0 bg-transparent text-muted material-icons me-2 iconhover"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar cambios en alumno"
                            onClick={() => {
                              nuevoAlumno({
                                _id: alumno._id,
                                nombre: alumno.nombre,
                                apellidos: alumno.apellidos,
                                curso: alumno.curso,
                                grupo: alumno.grupo,
                              });
                            }}
                          >
                            edit
                          </button>
                          <button
                            type="button"
                            className="border-0 bg-transparent text-danger material-icons iconhover"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar alumno"
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : seleccionBuscador &&
              seleccionBuscador.nombre !== "todos" && (
                <li
                  className="list-group-item m-2 shadow-sm rounded lihover"
                  key={seleccionBuscador._id}
                >
                  {console.log("SELECCION BUSCADOR", seleccionBuscador)}
                  <div className="card-body">
                    <div className="row justify-content-center align-items-center ">
                      <div className="col-4  ps-4">
                        <h5 className="card-title">
                          {seleccionBuscador.nombre}
                        </h5>
                        <p className="card-subtitle font-weight-light colorTexto">
                          {seleccionBuscador.apellidos}
                        </p>
                      </div>
                      <div className="col-4  text-center">
                        <small className="card-subtitle text-capitalize">
                          {seleccionBuscador.curso} - {seleccionBuscador.grupo}
                        </small>
                      </div>
                      <div className="col-4">
                        <div className="m-auto text-end pe-4">
                          <button
                            type="button"
                            className="border-0 bg-transparent text-secondary material-icons me-2 iconhover"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Ver mas información"
                          >
                            info
                          </button>
                          <button
                            type="button"
                            className="border-0 bg-transparent text-muted material-icons me-2 iconhover"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar cambios en alumno"
                            onClick={() => {
                              nuevoAlumno({
                                _id: seleccionBuscador._id,
                                nombre: seleccionBuscador.nombre,
                                apellidos: seleccionBuscador.apellidos,
                                curso: seleccionBuscador.curso,
                                grupo: seleccionBuscador.grupo,
                              });
                            }}
                          >
                            edit
                          </button>
                          <button
                            type="button"
                            className="border-0 bg-transparent text-danger material-icons iconhover"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Eliminar alumno"
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )}
        </ul>
        {loading && (
          <div className="m-5">
            <Suspense fallback={<div>Cargando...</div>}>
              <Spinner />
            </Suspense>
          </div>
        )}
        {alumnos && (
          <div className="mt-4 ps-4">
            <div className="row">
              <div className="col-6">
                Ver
                <select
                  id="n-enties"
                  name="n-entries"
                  className="m-2"
                  onChange={(e) => {
                    let numero = parseInt(e.target.value);
                    setNumElementosPorPagina(numero);
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                resultados
              </div>
              <div className="col-6 text-end pe-5">
                <div>
                  <button
                    className="border-0 bg-transparent flecha"
                    disabled={paginaActual === 1}
                    onClick={() => cambiarPagina("anterior")}
                  >
                    <img
                      src="/arrow_circle_left.svg"
                      href="botón izquierdo"
                      width={35}
                    ></img>
                  </button>
                  <span className="d-md-inline d-none">
                    {paginaActual} de {numTotalPaginas}
                  </span>
                  <button
                    className="border-0 bg-transparent flecha"
                    disabled={paginaActual === numTotalPaginas}
                    onClick={() => cambiarPagina("siguiente")}
                  >
                    <img
                      src="/arrow_circle_right.svg"
                      href="botón izquierdo"
                      width={35}
                    ></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
         
            .lihover:hover{
              background-color: #247c8c5e;
              cursor:pointer;
              color:white;
              }
            .colorTexto{

              color: #247c8c;
            }
            .colorIcono{
              color:orange;
              cursor: pointer;
            }
            .flecha:hover{
              border-transparent:none;
              border:2px solid orange;
              cursor:pointer;
            }
            {/* .zindex{
               position: relative;
             
                z-index: -1;
            } */}

      `}</style>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
};

// Listado.getInitialProps = async (contexto) => {
//   // Establecer el estado inicial en false en el servidor
//   //para solucionar problemas cuando se intenta recargar la página manualmente
//   return {
//     loading: false,
//     usuarios: null,
//   };
// };

export default Listado;
