import { useEffect, useState } from "react";

const AppDomain = () => {
  const [vertical, setVertical] = useState();
  const [palabras, setPalabras] = useState([
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
  ]);
  const [imagen, setImagenes] = useState([
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
  ]);
  const [contador, setContador] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [configuracion, setConfiguracion] = useState({
    imagen: true,
    sonido: false,
    mayusculas: false,
    tiempo: "5",
  });
  // REVISAR (quiero que la aplicación detecte cuando la pantalla esta en vertical para avisar al usuario de que debe girar el dispositivo)

  // useEffect(() => {
  //   if (screen.orientation.angle !== 90) {
  //     setVertical(true);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (screen.orientation.onchange !== null) {
  //     setVertical(!vertical);
  //     console.log("la pantalla esta en vertical?...", vertical);
  //   }
  // });

  useEffect(() => {
    if (configuracion.sonido) {
      setTimeout(() => {
        reproduce(palabras[contador]);
      }, 1000);
    }
  }, [contador]);
  useEffect(() => {
    if (configuracion.sonido) {
      setTimeout(() => {
        setDisabled(false); //Para que no se pueda cambiar de palabra hasta que termine de decirla
      }, 1500);
    } else {
      setTimeout(() => {
        setDisabled(false);
      }, 100);
    }
  }, [contador]);

  const reproduce = (text) => {
    if (window["speechSynthesis"] === undefined) {
      return;
    }
    const reproductor = window.speechSynthesis;
    const reproduceEstaPalabra = new SpeechSynthesisUtterance(text);
    reproductor.speak(reproduceEstaPalabra);
  };
  return (
    <>
      {vertical ? (
        <div className="fixed-top h-100 bg-dark opacity-75 align-content-center ">
          <div className="bg-warning w-25 m-auto ">hkjhkjhj</div>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        {palabras[contador] === "" ? (
          <h1 className="mt-5 w-50 m-auto display-1 text-center">ANIMALES</h1>
        ) : (
          ""
        )}
        {configuracion.imagen && palabras[contador] !== "" ? (
          <div className="row arriba">
            <div className="w-75 m-auto text-center">
              <img src={imagen[contador]} width={300} />
            </div>
          </div>
        ) : (
          <div className="row sinimagen"></div>
        )}
        <div className="row">
          <div className="col-1">
            <button
              className="border-0 bg-transparent p-0 m-0"
              onClick={() => {
                setContador(contador - 1);
                setDisabled(true);
              }}
              disabled={disabled}
            >
              {contador > 1 ? (
                <i className="bi bi-arrow-left-circle icono hover p-0"></i>
              ) : (
                ""
              )}
            </button>
          </div>
          <div className="col">
            {configuracion.mayusculas ? (
              <h1 className=" text-uppercase display-1 text-center fw-semibold palabra">
                {palabras[contador]}
              </h1>
            ) : (
              <h1 className="display-1 text-center fw-semibold palabra">
                {palabras[contador]}
              </h1>
            )}
          </div>

          <div className="col-1">
            {palabras[contador] === "" ? <span>Comenzar</span> : ""}
            <button
              className="border-0 bg-transparent p-0 m-0"
              onClick={() => {
                setContador(contador + 1);
                setDisabled(true);
              }}
              disabled={disabled}
            >
              {contador < palabras.length - 1 ? (
                <i className="bi bi-arrow-right-circle icono hover p-0 m-0"></i>
              ) : (
                ""
              )}
            </button>
          </div>
        </div>
      </div>
      <style>{`
            .icono{
                font-size: 4rem;
                color:#dcdcdc;
                padding:1rem;
            }
            .arriba{
              height: 450px;
            }
            .sinimagen{
              height: 35vh;
            }
            .palabra{
              font-size:7.5rem
            }
            .hover:hover{
                color: #a7a7a7
            }

            @media (max-width:1000px){
              .icono{
                font-size: 3rem;
              }
              .palabra{
                font-size:6.5rem;
      
              }
              img{
                width:150px;
                
              }
              .arriba{
              height: 200px;
            }
              
            }
            @media (max-width:680px){
              .icono{
                font-size: 2rem;
              }
              .palabra{
                font-size:4.5rem;

              }
            }
        `}</style>
    </>
  );
};

export default AppDomain;
