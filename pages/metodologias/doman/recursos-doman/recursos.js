import Download from "../../../../componentes/compartidos/Download";
import LayoutMainContent from "../../../../componentes/layouts/LayoutMainContent";
import Link from "next/link";

const recursos = () => {
  const descargables = [
    {
      titulo: "Como educar en casa",
      descripcion: "Libro de contenido infantil para padres y madres",
      direccionArchivo: "",
      imagen: "/descargar.png",
      nombreDescarga: "libro.png",
      imagenSize: "50",
      autor: "",
    },
    {
      titulo: "Método Doman",
      descripcion: "Texto académico de la universidad de Almería",
      direccionArchivo: "",
      imagen: "/descargar.png",
      nombreDescarga: "libro.png",
      imagenSize: "50",
      autor: "",
    },
    {
      titulo: "Cómo enseñar a leer a su bebé",
      descripcion:
        "Versíon en español de las páutas para aplicar el método Doman. Autor: Glenn J. Doman",
      direccionArchivo:
        "/descargas/libro-como-ensenar-a-leer-a-su-bebe-glenn-doman.pdf",
      imagen: "/descargar.png",
      nombreDescarga: "libro",
      imagenSize: "50",
      autor: "Glenn Doman",
    },
  ];
  return (
    <>
      <LayoutMainContent title="doman-recursos" content="método doman">
        <div className="imgvocablo">
          <Link href={"/"}>
            <a>
              <img alt="Logo vocablo" src="/logo_vocablo.svg" width="200" />
            </a>
          </Link>
        </div>
        <h3 className="title">Recursos Doman</h3>
        <h5 className="ms-3">Libros y documentos:</h5>
        <hr></hr>
        <div className="m-5 row">
          {descargables.map((libro, index) => (
            <Download
              key={index}
              titulo={libro.titulo}
              descripcion={libro.descripcion}
              direccionArchivo={libro.direccionArchivo}
              imagen={libro.imagen}
              nombreDescarga={libro.nombreDescarga}
              imagenSize={libro.imagenSize}
              autor={libro.autor}
            ></Download>
          ))}
        </div>
      </LayoutMainContent>
      <style>{`
           .title{
            margin-bottom:60px;
            color:#247c8c;
            text-align:center;
            }
          @media (max-width:440px){
            .imgvocablo{
              width:100%;
              text-align:center;
              margin-top:15px;
            }
            .title{
              width:100%;
              text-align:center;
              margin-top:0px;
            }  
      `}</style>
    </>
  );
};
export default recursos;
