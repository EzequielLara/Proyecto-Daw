import Download from "../../../../componentes/compartidos/Download";
import LayoutMainContent from "../../../../componentes/layouts/LayoutMainContent";
import Link from "next/link";
import styles from "../../../../styles/Home.module.css";

const recursos = () => {
  const descargables = [
    {
      texto1: "Como educar en casa",
      texto2: "Libro de contenido infantil para padres y madres",
      direccionArchivo: "",
      imagen: "/descargar.png",
      nombreDescarga: "libro",
      imagenSize: "50",
    },
    {
      texto1: "Didactica aplicativa del mundo occidental",
      texto2: "Texto académico de la universidad de Almería",
      direccionArchivo: "",
      imagen: "/descargar.png",
      nombreDescarga: "libro",
      imagenSize: "50",
    },
    {
      texto1: "Pokemon",
      texto2:
        "Revista con las últimas novedades de los pokemon. Saga cristal y saga fuego",
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
        <div className="imgvocablo">
          <Link href={"/"}>
            <a>
              <img alt="Logo vocablo" src="/logo_vocablo.svg" width="200" />
            </a>
          </Link>
        </div>
        <h3 className="title">Recursos Doman</h3>
        <h5>Libros y documentos:</h5>
        <hr></hr>
        <div className="m-5 row">
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
