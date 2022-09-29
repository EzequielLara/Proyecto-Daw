import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Formularios.module.css'

const ModalAvatar = ({seleccion, setSeleccion}) => {

    return (
        <>
        <div className='modal'>
            <Card style={{ width: '19rem' }} className='card'>
            <img alt="Logo vocablo"
                 src="/logo_vocablo.svg"
                 width="230"
                 className="d-inline-block align-top m-auto mt-4 mb-3"
            />
                <button type="button" className="border-0 text-danger position-absolute t-0 end-0 bg-transparent m-2 fs-4 fw-semibold" onClick={()=>{setSeleccion('')}}>X</button>
                <Card.Img variant="top" src={seleccion} style={{ width: '12rem', margin:'auto' }}  />
                <Card.Body>
                    
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Proporciona un nombre'/>
                    </div>
                <button type="submit" className='border-2 border-black bg-transparent text-dark rounded-2 p-2 w-100 pt-2 pb-2'>Guardar Avatar</button>
                
                </form>
                </Card.Body>
            </Card>
            
        </div>

        <style>
            {` 
            .modal{
                display: block;
                position: absolute;
                top:0;
                background: rgba(0, 0, 0, 0.8);
                left:0;
            }
            .card{
                
                margin: auto;
                margin-top: 3%;
                box-shadow: 2px 2px 20px 5px black;   
            }
            .eliminar{
                diplay:none;
            }

            
            
            `}
        </style>
        </>
    );
};

export default ModalAvatar;