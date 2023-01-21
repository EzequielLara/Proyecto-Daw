import Download from "../../../../componentes/compartidos/Download";
import Header from "../../../../componentes/compartidos/Header";
import LayoutMainContent from "../../../../componentes/layouts/LayoutMainContent";

const recursos = () => {
  const descargables = [
    {
      texto1: "texto",
      texto2: "texto2",
      direccionArchivo: "",
      imagen: "/descargar.png",
      nombreDescarga: "libro",
      imagenSize: "50",
    },
    {
      texto1: "texto",
      texto2: "texto2",
      direccionArchivo: "",
      imagen: "/descargar.png",
      nombreDescarga: "libro",
      imagenSize: "50",
    },
    {
      texto1: "texto",
      texto2: "texto2",
      direccionArchivo:
        "/descargas/libro-como-ensenar-a-leer-a-su-bebe-glenn-doman.pdf",
      imagen: "/descargar.png",
      nombreDescarga: "libro",
      imagenSize: "50",
    },
  ];
  return (
    <>
      <LayoutMainContent title="doman-recursos" content="método doman">
        <Header contenido="Recursos para descargar"></Header>
        <h5>Libros y documentos:</h5>
        <hr></hr>
        <div className="grid">
          {descargables.map((libro) => (
            <Download
              texto1={libro.texto1}
              texto2={libro.texto2}
              direccionArchivo={libro.direccionArchivo}
              imagen={libro.imagen}
              nombreDescarga={libro.nombreDescarga}
              imagenSize={libro.imagenSize}
            ></Download>
          ))}
        </div>
      </LayoutMainContent>
    </>
  );
};
export default recursos;
