import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import { getSession } from "next-auth/react";

const Home = ({ usuario }) => {
  return (
    <Layout title="docente | home">
      <Navegacion usuario={usuario}></Navegacion>
      <main></main>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const usuario = await getSession(context);
  console.log("resultado session:", usuario);
  if (!usuario)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  return {
    props: {
      usuario: usuario.user,
    },
  };
};

export default Home;
