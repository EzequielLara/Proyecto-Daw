import Formulario from "../componentes/Formulario";
import Eslogan from "../componentes/Eslogan";
import LayoutMainContent from "../componentes/layouts/LayoutMainContent";

import { getProviders } from "next-auth/react";

const Signin = ({ providers }) => {
  return (
    <>
      <LayoutMainContent title="login" content="vocablo">
        <div className="container">
          <div className="row">
            <div className="m-auto col-sm col-xl-4 col-lg bg-transparent ">
              <div className="formulario">
                <Formulario providers={providers} />
              </div>
            </div>
            <div className="m-auto col-sm col-xl-7 bg-transparent">
              <div className="eslogan">
                <Eslogan />
              </div>
            </div>
          </div>
        </div>
      </LayoutMainContent>
      <style>{`
       
        .formulario{
          max-width:350px;
          min-width:300px;
          margin:auto;
          margin-top:5%;
        }
        .eslogan{
          margin:auto;
        }
        @media (max-width:400px){
          .formulario{
            width:300px;
            margin-top:15%;
          }
          .eslogan{
            width:300px;
            margin-top:15%;
            margin-bottom:35px;
            text-aling:justify;
          }
        }
        @media (max-width:580px){
          .formulario{
            width:300px;
            margin-top:15%;
          }
          .eslogan{
            width:300px;
            margin-top:15%;
            margin-bottom:35px;
          }
        }
    `}</style>
    </>
  );
};

export const getStaticProps = async () => {
  const providers = await getProviders();
  console.log("aqui estan:", providers);
  return {
    props: { providers },
  };
};

export default Signin;
