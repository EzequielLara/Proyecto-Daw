import Link from "next/link";
import { useState } from "react";

const NavUsuario = ({ usuario }) => {
  const [control, setControl] = useState(true);

  return (
    <>
      {usuario ? (
        <Link href={"/autenticacion"}>
          <a>{usuario.nombre}</a>
        </Link>
      ) : (
        <Link href={"/autenticacion"}>
          <a>Acceso</a>
        </Link>
      )}
    </>
  );
};

export default NavUsuario;
