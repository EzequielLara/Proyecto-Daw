
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { useState } from 'react';

const Formulario = () => {
     // Tenemos dos formularios, el de registro y el de iniciar sesión, por lo tanto dos estados con los datos de cada formulario.
     const [datosUsuarioSesion, setDatosUsuarioSesion] = useState({});
     const [datosUsuarioRegistro, setDatosUsuarioRegistro] = useState({});

     //Estado para controlar la validación del formulario
     const [validacionFormulario, setValidacionFormulario] = useState();

     // Estados para controlar si se trata de un formulario o el otro
     const [iniciarSesion, setIniciarSesion] = useState(false);

    return (
       <>
        <div className="w-100 border-1 rounded-4 shadow-lg">
                    
            <div className={"w-75 m-auto p-2 pb-5 pt-4"}>
                <Link href="/">
                    <a>
                        <Image src="/logo_vocablo.svg" width={400} height={130} layout="responsive" priority="true"/> 
                    </a>
                </Link> 
                    
            </div>          
                        
            { iniciarSesion === false ?
                (
                <Form  className='w-75 m-auto p-2'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email"  className='border border-dark bg-transparent bg-opacity-25 text-dark'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" className='border border-dark bg-transparent text-dark'/>
                    </Form.Group>

                    <div class="d-flex justify-content-center p-4">
                        <Button variant="white" type="button" onClick={()=>{}} className='border border-dark bg-transparent text-dark rounded-2 p-2 w-100 pt-2 pb-2 toggle'>
                            Iniciar Sesión
                        </Button>
                    </div>
                </Form>
                ):(
                <Form className='w-75 m-auto p-2'>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="string" placeholder="Nombre"  className='border border-dark bg-transparent text-dark'/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email"  className='border border-dark text-dark'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" className='border border-dark text-dark'/>
                    </Form.Group>

                    <div class="d-flex justify-content-center p-4">
                        <Button variant="white" type="button" onClick={()=>{}} className='border border-dark text-dark rounded-2 p-2 w-100 pt-2 pb-2'>
                    Registrarme
                        </Button>
                    </div>
                </Form>
                )
            } 
                <div>
                    <button className='color-naranja ' onClick={()=>{setIniciarSesion(!iniciarSesion);}}>{ iniciarSesion ? "* Iniciar Sesión" : "* Registrarme"}</button>      
                </div>
        </div>
        <style>{`
        
            .color-naranja{
                background-color: transparent;
                margin: 1rem;
                padding: 1rem;
                text-align: left;
                color: black;
                text-decoration: none;
                border: 3px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
                max-width: 300px;  
            }
            .color-naranja:hover,
            .color-naranja:focus,
            .color-naranja:active {
                color: #FFC172;
                border-color:#FFC172;
            }   
        `}</style>
        </>    
    );
};

export default Formulario;