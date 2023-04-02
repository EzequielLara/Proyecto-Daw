import axios from "axios";
export default function Prueba() {
  const borrar = async (e) => {
    e.preventDefault();
    const respuesta = await axios.post("/api/auth/logout");
    console.log("respuesta servidor:", respuesta);
  };

  return <button onClick={(e) => borrar(e)}>LOGOUT</button>;
}
