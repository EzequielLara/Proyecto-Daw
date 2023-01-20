import LayoutMainContent from "../../../../componentes/layouts/LayoutMainContent";
const recursos = () => {
  return (
    <>
      <LayoutMainContent title="doman-recursos" content="método doman">
        <h3>pagina recursos para descargar</h3>
        <a
          href="/descargas/libro-como-ensenar-a-leer-a-su-bebe-glenn-doman.pdf"
          download="recurso.pdf"
        >
          <button type="button">Download</button>
        </a>
      </LayoutMainContent>
    </>
  );
};
export default recursos;
