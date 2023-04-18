import styles from "../styles/Listado.module.css";
import { useEffect, useState } from "react";
import SearchBox from "../componentes/compartidos/Search";
import Spinner from "../componentes/compartidos/Spinner";
import { Suspense } from "react";

const Listado = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [paginaActual, setPaginaActual] = useState(1);
  const [numElementosPorPagina, setNumElementosPorPagina] = useState(5);
  const [numTotalPaginas, setNumTotalPaginas] = useState(null);

  const [datosPaginados, setDatosPaginados] = useState([]);

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
    console.log("datos paginados", datosPaginados);
  }, [paginaActual]);

  const cambiarPagina = (direccion) => {
    if (direccion === "siguiente") {
      setPaginaActual(paginaActual + 1);
    } else {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <>
      <div className="container w-50 mt-5">
        <div></div>
        <div className="row justify-content-center align-items-center ">
          <div className="col-3 ">
            <h4 className="colorTexto">Alumnos</h4>
          </div>
          <div className="col-3">
            <span
              className="material-icons colorIcono"
              data-toggle="tooltip"
              data-placement="top"
              title="añadir alumno nuevo"
            >
              person_add
            </span>
          </div>
          <div className="col-6 text-end">
            <SearchBox suggestions={alumnos}></SearchBox>
          </div>
        </div>
        <hr></hr>
        <ul className="list-group zindex ">
          {alumnos &&
            alumnos.map((alumno) => (
              <li
                className="list-group-item m-2 shadow-sm rounded lihover"
                key={alumno._id}
              >
                <div className="card-body">
                  <div className="row justify-content-center align-items-center ">
                    <div className="col-sm-4 p-2">
                      <h5 className="card-title">{alumno.nombre}</h5>
                      <p className="card-subtitle colorTexto">
                        {alumno.apellidos}
                      </p>
                    </div>
                    <div className="col-sm-4 text-center">
                      <small
                        className="card-subtitle text-capitalize"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Crear alumno nuevo"
                      >
                        {alumno.curso} - {alumno.grupo}
                      </small>
                    </div>
                    <div className="col-sm-4 ">
                      <div className="m-auto text-center ">
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
            ))}
        </ul>
        {loading && (
          <div className="m-5">
            <Suspense fallback={<div>Cargando...</div>}>
              <Spinner />
            </Suspense>
          </div>
        )}
        {alumnos && (
          <div className={styles.datatable_container}>
            <div className={styles.footer_tools}>
              <div className={styles.list_items}>
                Ver
                <select
                  className={styles.n_entries}
                  id="n-enties"
                  name="n-entries"
                  onChange={(e) => {
                    setNumElementosPorPagina(e.target.value);
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                resultados
              </div>
              <div className={styles.pages}>
                <ul>
                  {datosPaginados.map((dato) => (
                    <li key={dato.id}>{dato.nombre}</li>
                  ))}
                </ul>
                <button
                  disabled={paginaActual === 1}
                  onClick={() => cambiarPagina("anterior")}
                >
                  Anterior
                </button>
                <button
                  disabled={paginaActual === numTotalPaginas}
                  onClick={() => cambiarPagina("siguiente")}
                >
                  Siguiente
                </button>
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
