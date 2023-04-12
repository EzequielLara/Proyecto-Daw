import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import { getSession } from "next-auth/react";
import { verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const Home = ({ usuario, loginAuth }) => {
  return (
    <Layout title="docente | home">
      <Navegacion usuario={usuario} loginAuth={loginAuth}></Navegacion>
      <main>
        <h1>Index</h1>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const usuario = await getSession(context);
  const myTokenName = context.req.cookies.myTokenName;
  if (!usuario)
    try {
      verify(myTokenName, process.env.SECRET_JWT);
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

export default Home;
