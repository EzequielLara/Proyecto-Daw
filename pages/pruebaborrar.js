import axios from "axios";
import { useRouter } from "next/router";
export default function Prueba() {
  const router = useRouter();

  const borrar = async (e) => {
    e.preventDefault();
    const respuesta = await axios.post("/api/auth/logout");
    router.push("/");
  };

  return <button onClick={(e) => borrar(e)}>LOGOUT</button>;
}
