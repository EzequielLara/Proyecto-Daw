import Link from "next/link";
import { useRouter } from "next/router";

const NavUsuario = ({ usuario, loginAuth }) => {
  const router = useRouter();
  if (!usuario) {
    router.push("/login");
  }
  return (
    <>
      {usuario ? (
        <span className="nav-link font-monospace ps-5 text-dark">
          {usuario}
        </span>
      ) : (
        ""
      )}
    </>
  );
};

export default NavUsuario;
