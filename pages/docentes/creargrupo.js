import { useState } from "react";

import Personajes from "../../componentes/Personajes";
import Navegacion from "../../componentes/navegacion/Navegacion";
import ModalAvatar from "../../componentes/modales/ModalAvatar";
import LayoutMainContent from "../../componentes/layouts/LayoutMainContent";

const Avatares = () => {
  const [seleccion, setSeleccion] = useState("");

  const getPerro = (perro) => {
    setSeleccion(perro);
  };

  return (
    <>
      <LayoutMainContent title="docente | crear grupo" content="método doman">
        <Navegacion usuario={"prueba"}></Navegacion>
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

export default Avatares;
