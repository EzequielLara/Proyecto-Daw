import Head from "next/head";
import Formulario from "../componentes/Formulario";
import Eslogan from "../componentes/Eslogan";
import LayoutInfo from "../componentes/layouts/LayoutMainContent";

const Autenticacion = () => {
  return (
    <>
      <LayoutInfo title="login" content="vocablo">
        <div className="container">
          <div className="row">
            <div className="m-auto col-sm col-xl-4 col-lg bg-transparent ">
              <div className="formulario">
                <Formulario />
              </div>
            </div>
            <div className="m-auto col-sm col-xl-7 bg-transparent">
              <div className="eslogan">
                <Eslogan />
              </div>
            </div>
          </div>
        </div>
      </LayoutInfo>
      <style>{`
       
        .formulario{
          max-width:350px;
          min-width:300px;
          margin:auto;
          margin-top:15%;
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

export default Autenticacion;
