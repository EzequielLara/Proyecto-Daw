import style from "../../styles/ModalAlumnos.module.css";

const ModalRecurso = ({ cambiarModal }) => {
  return (
    <>
      <div className={style.modal}>
        <div className={style.cerrar_modal}>
          <img src="/cerrar.svg" alt="cerrar modal" onClick={cambiarModal} />
        </div>
        <form className={`${style.formulario} ${style.animar}`}>
          <legend className="my-5">
            Simulación de redirección al recurso seleccionado
          </legend>
        </form>
      </div>
    </>
  );
};

export default ModalRecurso;
