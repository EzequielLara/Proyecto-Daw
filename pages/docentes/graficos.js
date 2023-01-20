import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import Donut from "../../componentes/graficos/donut";
import Radargrafico from "../../componentes/graficos/radargrafico";

const Graficos = () => {
  return (
    <Layout title="docente | gráficos">
      <Navegacion></Navegacion>
      <main>
        <div className="container">
          <div className="row m-5">
            <div className="col-sm m-5 shadow-lg p-3 mb-5 bg-white rounded">
              <h4 className="pb-3 text-center text-secondary">Gráfico 1</h4>
              <Donut></Donut>
            </div>
            <div className="col-sm m-5 shadow-lg p-3 mb-5 bg-white rounded">
              <h4 className="pb-3 text-center text-secondary">Gráfico 2</h4>
              <Radargrafico></Radargrafico>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Graficos;
