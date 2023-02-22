import { useState } from "react";

import Personajes from "../../componentes/Personajes";
import Navegacion from "../../componentes/navegacion/Navegacion";
import ModalAvatar from "../../componentes/modales/ModalAvatar";
import LayoutMainContent from "../../componentes/layouts/LayoutMainContent";
import { getSession } from "next-auth/react";

const Avatares = ({ usuario }) => {
  const [seleccion, setSeleccion] = useState("");

  const getPerro = (perro) => {
    setSeleccion(perro);
  };

  return (
    <>
      <LayoutMainContent title="crear grupo" content="método doman">
        <Navegacion usuario={usuario}></Navegacion>
        {seleccion ? (
          <ModalAvatar
            seleccion={seleccion}
            setSeleccion={setSeleccion}
          ></ModalAvatar>
        ) : null}
        <Personajes getPerro={getPerro}></Personajes>
      </LayoutMainContent>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const usuario = await getSession(context);
  console.log("resultado session:", usuario);
  if (!usuario)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  return {
    props: {
      usuario: usuario.user,
    },
  };
};

export default Avatares;
