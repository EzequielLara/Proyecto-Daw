const Eslogan = () => {
  return (
    <>
      <div>
        <h3 className="texto-principal text-start">
          Si aceptamos que aprendemos de formas distintas y creemos en una
          educación individualizada...¿Por qué seguimos enseñando bajo una única
          metodología?
        </h3>
        <p className="texto-secundario text-end m-5">
          Colaboremos en la transformación del aula
        </p>
      </div>
      <style>{`
         @import url('https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap');
        .texto-principal{
          font-family: 'Maven Pro', sans-serif;
          text-align:justify;
        }
        .texto-secundario{
          font-family: 'Maven Pro', sans-serif;
          text-align:justify;
        }
      `}</style>
    </>
  );
};

export default Eslogan;
