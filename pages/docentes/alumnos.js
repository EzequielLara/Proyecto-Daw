import { useEffect, useState } from "react";
import Layout from "../../componentes/layouts/Layout";
import Navegacion from "../../componentes/navegacion/Navegacion";
import SearchBox from "../../componentes/compartidos/Search";
import Spinner from "../../componentes/compartidos/Spinner";
import { Suspense } from "react";

const Alumnos = () => {
  const [usuarios, setUsuarios] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const consulta = await fetch("/api/alumnos")
        .then((x) => x.json())
        .then((x) => {
          setUsuarios([...x]);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  return (
    <Layout title="docente | alumnos">
      <Navegacion usuario={"prueba"}></Navegacion>
      <main>
        <h1>Usuarios</h1>

        {usuarios &&
          usuarios.map((usuario) => (
            <div key={usuario._id}>
              <h6>Nombre:{usuario.nombre}</h6>
              <h6>ID:{usuario._id}</h6>
              <h6>Password:{usuario.password}</h6>
              <hr></hr>
            </div>
          ))}
        {loading && !usuarios ? (
          <Suspense fallback={<div>Cargando...</div>}>
            <Spinner />
          </Suspense>
        ) : (
          <SearchBox suggestions={usuarios}></SearchBox>
        )}
      </main>
    </Layout>
  );
};

Alumnos.getInitialProps = async (contexto) => {
  // Establecer el estado inicial en false en el servidor
  //para solucionar problemas cuando se intenta recargar la página manualmente
  return {
    loading: false,
    usuarios: null,
  };
};

export default Alumnos;
