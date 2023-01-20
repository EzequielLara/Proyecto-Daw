import LayoutInfo from "../../../../componentes/layouts/LayoutInfo";
const recursos = () => {
  return (
    <>
      <LayoutInfo title="doman-recursos" content="método doman">
        const archivos = []
        <h3>pagina recursos para descargar</h3>
        <a
          href="/descargas/libro-como-ensenar-a-leer-a-su-bebe-glenn-doman.pdf"
          download="recurso.pdf"
        >
          <button type="button">Download</button>
        </a>
      </LayoutInfo>
    </>
  );
};
export default recursos;
