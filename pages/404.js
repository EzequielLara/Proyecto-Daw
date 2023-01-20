import Error404 from "../componentes/Error404";
import LayoutInfo from "../componentes/layouts/LayoutMainContent";

const Error = () => {
  return (
    <LayoutInfo title="página no encontrada" content="página de error 404">
      <Error404></Error404>
    </LayoutInfo>
  );
};

export default Error;
