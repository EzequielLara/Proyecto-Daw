const Download = ({
  texto1,
  texto2,
  imagen,
  direccionArchivo,
  nombreDescarga,
  imagenSize,
}) => {
  return (
    <div className="w-25 shadow m-2 p-3 mb-5 bg-white rounded">
      <div className="row">
        <div className="col-3">
          <img
            alt={nombreDescarga}
            src={imagen}
            width={imagenSize}
            className="m-3 "
          ></img>
        </div>
        <div className="col ">
          <small className="text-justify">{texto2}</small>
        </div>
      </div>
      <div className="font-weight-bold bg-warning text-center mt-2">
        <a
          href={direccionArchivo}
          download={nombreDescarga}
          className="text-decoration-none text-reset"
        >
          <p>{texto1}</p>
        </a>
      </div>
    </div>
  );
};

export default Download;
