import styles from '../styles/Formularios.module.css'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router'

const Formulario = () => {
     // Tenemos dos formularios, el de registro y el de iniciar sesión, por lo tanto dos estados con los datos de cada formulario.
     const [datosUsuarioSesion, setDatosUsuarioSesion] = useState({});
     const [datosUsuarioRegistro, setDatosUsuarioRegistro] = useState({});

     // Estados para controlar cual de los dos formularios se mostrará
     const [iniciarSesion, setIniciarSesion] = useState(false);

     //Estado para controlar la validación del formulario
     const [validacionFormulario, setValidacionFormulario] = useState();

     const router = useRouter()

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

                    <div className="d-flex justify-content-center p-4">
                        <Button variant="white" type="button" className='border border-dark bg-transparent text-dark rounded-2 p-2 w-100 pt-2 pb-2' onClick={()=>{router.push("/docentes");}}>
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

                    <div className="d-flex justify-content-center p-4">
                        <Button variant="white" type="button" onClick={()=>{}} className='border border-dark text-dark rounded-2 p-2 w-100 pt-2 pb-2'>
                    Registrarme
                        </Button>
                    </div>
                </Form>
                )
            } 
                <div>
                    <button className={styles.boton_registro} onClick={()=>{setIniciarSesion(!iniciarSesion);}}>{ iniciarSesion ? "* Iniciar Sesión" : "* Registrarme"}</button>      
                </div>
        </div>
        </>    
    );
};

export default Formulario;