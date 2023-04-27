import axios from "axios";
import { useRouter } from "next/router";
export default function Prueba() {
  const router = useRouter();

  const borrar = async (e) => {
    e.preventDefault();
    const respuesta = await axios.post("/api/auth/logout");
    router.push("/");
  };

  return (
    <div className=" row mx-auto my-5">
      <div className="col"></div>
      <div className=" col-8 col-md-5 col-lg-3">
        <div className="card shadow-lg rounded">
          <div className="text-center ">
            <img alt="Logo vocablo" src="/logo_vocablo.svg" width="150" />
          </div>
          <div className="card-body p-4">
            <h5 className="card-title text-center">¿Desea cerrar su sesión?</h5>
            <p className="card-text">
              Una vez pulsado el botón se le redirigirá a la página de inicio.
            </p>
            <button
              className="mx-auto btn btn-outline-warning  m-2"
              onClick={(e) => borrar(e)}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
