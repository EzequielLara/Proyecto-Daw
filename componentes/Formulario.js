import styles from "../styles/Formularios.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Formulario = () => {
  // Tenemos dos formularios, el de registro y el de iniciar sesión, por lo tanto dos estados con los datos de cada formulario.
  const [datosUsuarioSesion, setDatosUsuarioSesion] = useState({});
  const [datosUsuarioRegistro, setDatosUsuarioRegistro] = useState({});

  // Estados para controlar cual de los dos formularios se mostrará
  const [iniciarSesion, setIniciarSesion] = useState(false);

  //Estado para controlar si la validación del formulario es satisfactoria
  const [validacionFormulario, setValidacionFormulario] = useState(false);

  const router = useRouter();

  return (
    <div className="w-100 border-1 rounded-4 shadow-lg">
      <div className={"w-75 m-auto p-2 pb-5 pt-4"}>
        <Link href="/">
          <a>
            <Image
              src="/logo_vocablo.svg"
              width={400}
              height={130}
              layout="responsive"
              priority="true"
            />
          </a>
        </Link>
      </div>

      {iniciarSesion === false ? (
        <>
          <form className="w-75 m-auto p-2">
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="d-flex justify-content-center p-4">
              <button
                type="submit"
                className="border border-dark text-dark bg-transparent rounded-2 p-2 w-100 pt-2 pb-2"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/docentes");
                }}
              >
                Iniciar Sesion
              </button>
            </div>
          </form>
          <div>
            <button
              className={styles.boton_registro}
              onClick={() => {
                setIniciarSesion(!iniciarSesion);
              }}
            >
              {iniciarSesion ? "* Iniciar Sesión" : "* Registrarme"}
            </button>
          </div>
        </>
      ) : (
        <>
          {" "}
          <form className="w-75 m-auto p-2">
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="name"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="d-flex justify-content-center p-4">
              <button
                type="submit"
                className="border border-dark text-dark bg-transparent rounded-2 p-2 w-100 pt-2 pb-2"
              >
                Registrarme
              </button>
            </div>
          </form>
          <div>
            <button
              className={styles.boton_registro}
              onClick={() => {
                setIniciarSesion(!iniciarSesion);
              }}
            >
              {iniciarSesion ? "* Iniciar Sesión" : "* Registrarme"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Formulario;
