import Download from "../../../../componentes/compartidos/Download";
import Header from "../../../../componentes/compartidos/Header";
import LayoutMainContent from "../../../../componentes/layouts/LayoutMainContent";
const recursos = () => {
  return (
    <>
      <LayoutMainContent title="doman-recursos" content="método doman">
        <Header contenido="Recursos para descargar"></Header>
        <Download
          texto1="libro doman"
          texto2="Recopilación de ejercicios "
          direccionArchivo="/descargas/libro-como-ensenar-a-leer-a-su-bebe-glenn-doman.pdf"
          imagen="/descargar.png"
          nombreDescarga="libroDoman.pdf"
          imagenSize="50"
        ></Download>
      </LayoutMainContent>
    </>
  );
};
export default recursos;
