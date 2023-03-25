import Link from "next/link";
import NavUsuario from "./NavUsuario";

const Navegacion = ({ usuario }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link href={"/"}>
            <a className="logo">
              <img
                alt="Logo vocablo"
                src="/logo_vocablo.svg"
                width="200"
                className="d-inline-block align-top"
              />
            </a>
          </Link>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href={"/infovocablo"} className="nav-link">
                  <a className="nav-link">Proyecto vocablo</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/metodologias"}>
                  <a className="nav-link" href="#">
                    Metodologías
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/docentes/graficos"}>
                  <a className="nav-link" href="#">
                    Estadísticas
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/docentes/creargrupo"}>
                  <a className="nav-link" href="#">
                    Grupos
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/metodologias/doman/app-doman/app"}>
                  <a className="nav-link" href="#">
                    Applicaciones
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/metodologias/doman/app-doman"}>
                  <a className="nav-link" href="#">
                    Configuración
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <NavUsuario usuario={usuario}></NavUsuario>
              </li>
              <li>
                <Link href={"/api/auth/signout"}>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      className="bi bi-box-arrow-right mt-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>{`
        .logo{
          padding-right:15%;
        }
        .cristal{
          
           backdrop-filter: blur(5px);
           border-bottom: 1px solid black;

          
        }
      `}</style>
    </>
  );
};

export default Navegacion;
