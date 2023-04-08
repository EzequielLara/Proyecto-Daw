import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import Donut from "../../componentes/dashboard/donut";
import Radargrafico from "../../componentes/dashboard/radargrafico";
import { getSession } from "next-auth/react";
import { verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const Dashboard = ({ usuario }) => {
  return (
    <Layout title="docente | gráficos">
      <Navegacion usuario={usuario}></Navegacion>
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

export const getServerSideProps = async (context) => {
  const usuario = await getSession(context);
  const myTokenName = context.req.cookies.myTokenName;
  if (!usuario)
    try {
      verify(myTokenName, "secret");
      return {
        props: {
          usuario: jwt.decode(myTokenName).username,
          loginAuth: false,
        },
      };
    } catch {
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    }
  return {
    props: {
      usuario: usuario.user.name,
      loginAuth: true,
    },
  };
};

export default Dashboard;
