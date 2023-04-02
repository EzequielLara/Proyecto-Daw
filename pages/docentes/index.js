import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import { getSession } from "next-auth/react";
import { verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";

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
  const myTokenName = context.req.cookies.myTokenName;
  if (!usuario)
    try {
      verify(myTokenName, "secret");
      return {
        props: {
          usuario: jwt.decode(myTokenName).username,
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
    },
  };
};

export default Home;
