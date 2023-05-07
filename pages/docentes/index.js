import Layout from "../../componentes/layouts/Layout";
import { useState } from "react";
import Navegacion from "../../componentes/navegacion/Navegacion";
import ModalRecurso from "../../componentes/modales/ModalRecurso";
import { getSession } from "next-auth/react";
import { verify } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const Home = ({ usuario, loginAuth }) => {
  const [modal, setModal] = useState(false);
  const [seleccion, setSeleccion] = useState({});
  const { recursos, recursosColectivos } = seleccion;
  const [metodologias, setMetodologias] = useState([
    {
      metodologia: "Doman",
      recursosColectivos: ["recurso 1", "recurso 2"],
      recursos: ["recurso 1", "recurso 2", "recurso 3", "recurso 4"],
    },
    {
      metodologia: "Silábico",
      recursosColectivos: ["recurso 1"],
      recursos: ["recurso 1", "recurso 2", "recurso 3"],
    },
    {
      metodologia: "Alfabético",
      recursosColectivos: ["recurso 1", "recurso 2", "recurso 3"],
      recursos: ["recurso 1", "recurso 2", "recurso 3", "recurso 4"],
    },
    {
      metodologia: "Fonético",
      recursosColectivos: ["recurso 1", "recurso 2"],
      recursos: ["recurso 1"],
    },
    {
      metodologia: "Global",
      recursosColectivos: ["recurso 1", "recurso 2"],
      recursos: [
        "recurso 1",
        "recurso 2",
        "recurso 3",
        "recurso 4",
        "recurso 5",
        "recurso 6",
      ],
    },
  ]);

  const cambiarModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Layout title="docentes | home">
        <Navegacion usuario={usuario} loginAuth={loginAuth}></Navegacion>
        <main>
          {!modal ? (
            <>
              <h3 className="m-3 title mb-5">Recursos Didácticos</h3>
              <div className="row">
                <div className="col-5">
                  {metodologias &&
                    metodologias.length > 0 &&
                    metodologias.map((met, index) => (
                      <div key={index} className="text-end">
                        <button
                          type="button"
                          className="p-3 my-2 btn btn-outline-secondary w-75"
                          onClick={() => setSeleccion(met)}
                        >
                          <h5 className="ms-3">
                            Metodología {met.metodologia}
                          </h5>
                        </button>
                      </div>
                    ))}
                </div>
                <div className="col">
                  {seleccion && seleccion.metodologia !== undefined ? (
                    <>
                      {console.log(seleccion.metodologia)}
                      <h4 className="title text-capitalize m-auto w-75">
                        {seleccion.metodologia}
                      </h4>
                      <hr className="w-50 m-auto my-2"></hr>

                      <div className="list-group w-50 ms-5 my-4">
                        <h5>Recursos:</h5>
                        {recursos !== undefined &&
                          recursos.length > 0 &&
                          recursos.map((sel, index) => (
                            <button
                              key={index}
                              className="list-group-item list-group-item-action list-group-item-primary text-center"
                              onClick={() => {
                                setModal(!modal);
                              }}
                            >
                              {sel}
                            </button>
                          ))}
                      </div>

                      <div className="list-group w-50 ms-5 mb-3">
                        <h5>Recursos Grupales:</h5>
                        {recursosColectivos !== undefined &&
                          recursosColectivos.length > 0 &&
                          recursosColectivos.map((sel, index) => (
                            <button
                              key={index}
                              className="list-group-item list-group-item-action list-group-item-warning text-center"
                              onClick={() => {
                                setModal(!modal);
                              }}
                            >
                              {sel}
                            </button>
                          ))}
                      </div>
                    </>
                  ) : (
                    <h4 className="title my-5 m-auto text-center w-75">
                      Seleccione una Metodología
                    </h4>
                  )}
                </div>
              </div>
            </>
          ) : (
            <ModalRecurso cambiarModal={cambiarModal}></ModalRecurso>
          )}
        </main>
      </Layout>
      <style>{`
           .title{
            margin-bottom:60px;
            color:#247c8c;
            text-align:center;
            }
          @media (max-width:440px){
            .title{
              width:100%;
              text-align:center;
              margin-top:0px;
            }  
      `}</style>
    </>
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
