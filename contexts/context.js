import { createContext, useState } from "react";

export const Configuracion = createContext(null);

function Context({ children }) {
  const [datos, setDatos] = useState({
    tematica: {
      animales: [
        "",
        "león",
        "perro",
        "gato",
        "oso",
        "rana",
        "elefante",
        "zorro",
        "jirafa",
        "conejo",
      ],
      imagenes: [
        "",
        "/animales/leon.png",
        "/animales/perro.png",
        "/animales/gato.png",
        "/animales/oso.png",
        "/animales/rana.png",
        "/animales/elefante.png",
        "/animales/zorro.png",
        "/animales/jirafa.png",
        "/animales/conejo.png",
      ],
    },
    tiempo: 0,
    imagen: false,
    sonido: false,
    mayusculas: false,
    numeroTarjetas: 5,
    tiempo: 0,
  });

  return (
    <Configuracion.Provider value={{ datos, setDatos }}>
      {children}
    </Configuracion.Provider>
  );
}

export default Context;
