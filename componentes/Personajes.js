import { useState } from "react";

const Avatares = ({ getPerro }) => {
  const [seleccionados, setSeleccionados] = useState([]);
  const personajes = [
    "/perretes/perro1.png",
    "/perretes/perro2.png",
    "/perretes/perro4.png",
    "/perretes/perro6.png",
    "/perretes/perro7.png",
    "/perretes/perro8.png",
    "/perretes/perro9.png",
    "/perretes/perro10.png",
    "/perretes/perro11.png",
    "/perretes/perro12.png",
    "/perretes/perro13.png",
    "/perretes/perro14.png",
    "/perretes/perro15.png",
    "/perretes/perro16.png",
    "/perretes/perro17.png",
  ];

  return (
    <>
      <div className="container w-75 mt-5">
        <div className="row">
          <div className="col-4">
            <div className="row">
              {personajes.map((per) => (
                <div key={per} className="col bg-transparent ">
                  <img
                    src={per}
                    width="80"
                    alt={per}
                    key={per}
                    className="m-auto estiloFila p-1"
                    onClick={(e) => {
                      setSeleccionados([
                        ...seleccionados,
                        { imagen: e.target.src, nombre: "" },
                      ]);
                      getPerro({ imagen: e.target.src, nombre: "" });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col"></div>
          <div className="col-7">
            <div className="row">
              {seleccionados.map((per) => (
                <div className="col bg-transparent ">
                  <img
                    src={per.imagen}
                    width="80"
                    alt={per.imagen}
                    key={per}
                    className="m-auto p-1"
                  />
                  <p text-center>{per.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            
            .estiloFila:hover{
                border: 7px solid orange;
                border-radius: 50%;
                margin: auto;
                cursor: pointer;
                }
            `}
      </style>
    </>
  );
};

export default Avatares;
