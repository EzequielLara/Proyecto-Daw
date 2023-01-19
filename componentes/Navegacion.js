import Link from "next/link";
import NavUsuario from "./NavUsuario";

const Navegacion = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <Link href={"/infovocablo"}>
                  <a className="nav-link active" aria-current="page">
                    Proyecto vocablo
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={"/metodologias"}>
                  <a className="nav-link active" aria-current="page">
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
                    App
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
            </ul>
          </div>
          <div className="nav-item">
            <NavUsuario
              usuario={{ nombre: "Jose Juan" }}
              className="nav-link justify-content-end me-5"
            ></NavUsuario>
          </div>
        </div>
      </nav>
      <style>{`
        .logo{
          padding-right:15%;
        }
      `}</style>
    </>
  );
};

export default Navegacion;
