import { useState } from "react";

import Personajes from "../../componentes/Personajes";
import Navegacion from "../../componentes/navegacion/Navegacion";
import ModalAvatar from "../../componentes/modales/ModalAvatar";
import LayoutInfo from "../../componentes/layouts/LayoutInfo";

const Avatares = () => {
  const [seleccion, setSeleccion] = useState("");

  const getPerro = (perro) => {
    setSeleccion(perro);
  };

  return (
    <>
      <LayoutInfo title="crear grupo" content="método doman">
        <Navegacion></Navegacion>
        {seleccion ? (
          <ModalAvatar
            seleccion={seleccion}
            setSeleccion={setSeleccion}
          ></ModalAvatar>
        ) : null}
        <Personajes getPerro={getPerro}></Personajes>
      </LayoutInfo>
    </>
  );
};

export default Avatares;
