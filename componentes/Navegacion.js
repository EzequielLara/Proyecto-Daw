import Link from 'next/link'
import Layout from './Layout';
import NavUsuario from './NavUsuario';

const Navegacion = () => {
    return (
      <Layout title="home - docentes">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href={"/"}>
            <a>
              <img alt="Logo vocablo"
                  src="/logo_vocablo.svg"
                  width="170"
                  className="d-inline-block align-top"
              />
              </a>
            </Link>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </Link>
              </li>
              <li className="nav-item">
              <Link href={"/"}>
                <a className="nav-link" href="#">
                  Features
                </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href={"/docentes/creargrupo"}>
                <a className="nav-link" href="#">
                  grupos
                </a>
              </Link>
              </li>
            </ul>
          </div>
              <div className="nav-item">
              <Link href={"/"}>
                <a className="nav-link justify-content-end me-5" href="#">
                  <NavUsuario usuario={{nombre:"Jose Juan"}}></NavUsuario>
                </a>
              </Link>
              </div>
        </div>
      </nav>
      </Layout>
    );
};

export default Navegacion;