import Link from "next/link";

const NavUsuario = ({ usuario }) => {
  return (
    <>
      {usuario ? (
        <span className="nav-link font-monospace ps-5 text-dark">
          {usuario}
        </span>
      ) : (
        <Link href={"/api/auth/signout"}>
          <a className="nav-link font-monospace">Acceso no autorizado</a>
        </Link>
      )}
    </>
  );
};

export default NavUsuario;
