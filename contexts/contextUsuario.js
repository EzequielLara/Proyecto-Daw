import { createContext, useState } from "react";

export const Usuario = createContext();

function ContextUsuario({ children }) {
  const [datos, setDatos] = useState(null);

  return (
    <Usuario.Provider value={{ datos, setDatos }}>{children}</Usuario.Provider>
  );
}

export default ContextUsuario;
