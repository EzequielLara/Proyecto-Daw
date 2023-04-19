import style from "../../styles/ModalAlumnos.module.css";
const ModalAlumno = ({
  setModal,
  animarModal,
  setAnimarModal,
  gastos,
  setGastos,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  //  const [id, setId] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombreGasto(gastoEditar.nombreGasto);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 300);
  };
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const generarFecha = () => {
    const fecha = new Date();
    const parametrosFecha = { year: "numeric", month: "long", day: "2-digit" };
    const datoFecha = fecha.toLocaleDateString("es-ES", parametrosFecha);

    return datoFecha;
  };

  const guardarGasto = () => {
    if (gastoEditar.id) {
      const gastoNuevo = {
        id: gastoEditar.id,
        fecha: generarFecha(),
        nombreGasto,
        cantidad,
        categoria,
      };
      //Actualizar
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gastoEditar.id ? gastoNuevo : gastoState
      );

      setGastos(gastosActualizados);
      setGastoEditar({});
      return;
    }

    setGastos([
      ...gastos,
      {
        id: generarId(),
        fecha: generarFecha(),
        nombreGasto,
        cantidad,
        categoria,
      },
    ]);
  };

  const resetearFormularioModal = () => {
    setNombreGasto("");
    setCantidad("");
    setCategoria("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Botón pulsado");

    if ([nombreGasto, cantidad, categoria].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    guardarGasto();
    resetearFormularioModal();
    ocultarModal();
  };
  return (
    <>
      <div className={style.modal}>
        <div className={style.cerrar - modal}>
          <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        >
          <legend>
            {gastoEditar.nombreGasto ? "Editar Gasto" : "Nuevo Gasto"}
          </legend>
          <div className={style.campo}>
            <label htmlFor="nombre">Nombre Gasto</label>
            <input
              id="nombre"
              type="text"
              placeholder="Añade el Nombre del Gasto"
              value={nombreGasto}
              onChange={(e) => {
                setNombreGasto(e.target.value);
              }}
            />
          </div>
          <div className={style.campo}>
            <label htmlFor="cantidad">Cantidad</label>
            <input
              type="number"
              placeholder="Añade cantidad del Gasto"
              value={cantidad}
              onChange={(e) => {
                setCantidad(Number(e.target.value));
              }}
            />
          </div>
          <div className={style.campo}>
            <label htmlFor="categoria">Categoría</label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
            <input
              id="boton"
              type="submit"
              value={
                gastoEditar.nombreGasto ? "Guardar cambios" : "Añadir Gasto"
              }
            />
            {error ? <p>No se admiten campos vacíos</p> : ""}
          </div>
        </form>
      </div>
    </>
  );
};
export default ModalAlumno;
