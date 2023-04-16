import Head from "next/head";
import styles from "../../styles/Listado.module.css";
import { useEffect, useState } from "react";

const listado = ({ data }) => {
  const [alumnos, setAlumnos] = useState([
    {
      _id: 1,
      nombre: "Pepe",
      apellidos: "Gonzalez Saavedra",
      edad: "6",
      curso: "primero",
      grupo: "B",
    },
    {
      _id: 2,
      nombre: "Juan",
      apellidos: "Fernández López",
      edad: "8",
      curso: "primero",
      grupo: "A",
    },
    {
      _id: 3,
      nombre: "Andrea",
      apellidos: "Martínez Nutria",
      edad: "7",
      curso: "primero",
      grupo: "B",
    },
    {
      _id: 4,
      nombre: "Pepe",
      apellidos: "Gonzalez Saavedra",
      edad: "6",
      curso: "primero",
      grupo: "B",
    },
    {
      _id: 5,
      nombre: "Juan",
      apellidos: "Fernández López",
      edad: "8",
      curso: "primero",
      grupo: "A",
    },
    {
      _id: 6,
      nombre: "Andrea",
      apellidos: "Martínez Nutria",
      edad: "7",
      curso: "primero",
      grupo: "B",
    },
    {
      _id: 7,
      nombre: "Pepe",
      apellidos: "Gonzalez Saavedra",
      edad: "6",
      curso: "primero",
      grupo: "B",
    },
    {
      _id: 8,
      nombre: "Juan",
      apellidos: "Fernández López",
      edad: "8",
      curso: "primero",
      grupo: "A",
    },
    {
      _id: 9,
      nombre: "Andrea",
      apellidos: "Martínez Nutria",
      edad: "7",
      curso: "primero",
      grupo: "B",
    },
  ]);
  useEffect(() => {
    // setData(data);
    console.log("cargando data....");
  }, []);
  return (
    <>
      <Head>
        <title>vocablo | listado</title>
        <meta name="description" content="enseñar a leer" />
        <link rel="icon" href="/icono_vocablo.svg" />
      </Head>
      <div className={styles.datatable_container}>
        <div className={styles.header_tools}>
          <div className={styles.tools}>
            <ul>
              <li>
                <span>
                  <input type="checkbox"></input>
                </span>
              </li>
              <li>
                <button>
                  <i className={`${styles.material_icons} material-icons`}>
                    add_circle
                  </i>
                </button>
              </li>
              <li>
                <button>
                  <i className={`${styles.material_icons} material-icons`}>
                    edit
                  </i>
                </button>
              </li>
              <li>
                <button>
                  <i className={`${styles.material_icons} material-icons`}>
                    delete
                  </i>
                </button>
              </li>
              <li>
                <button>
                  <i className={`${styles.material_icons} material-icons`}>
                    done
                  </i>
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.search}>
            <input
              type="text"
              name=""
              id=""
              className={styles.search_input}
            ></input>
          </div>
        </div>

        <table className={styles.datatable}>
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Edad</th>
              <th>Curso</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {/* DATOS */}
            {alumnos &&
              alumnos.map((alumno) => (
                <tr key={alumno._id}>
                  <td className={styles.table_checkbox}>
                    <input type="checkbox"></input>
                  </td>
                  {/* <td><span className="away"></span></td> 
            <td><span className="offline"></span></td>  */}
                  <td>
                    <span className={styles.offline}></span>
                  </td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.apellidos}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.curso}</td>
                  <td>{alumno.grupo}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className={styles.footer_tools}>
          <div className={styles.list_items}>
            Ver
            <select className={styles.n_entries} id="n-enties" name="n-entries">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            resultados
          </div>
          <div className={styles.pages}>
            <ul>
              <li>
                <span className={styles.active}>1</span>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <button>6</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
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

export default listado;
