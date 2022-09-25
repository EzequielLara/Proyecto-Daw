import Image from "next/image";
import { useState } from "react";
import Link from 'next/link'

const Formularios = () => {

    // Tenemos dos formularios, el de registro y el de iniciar sesión, por lo tanto dos estados con los datos de cada formulario.
    const [datosUsuarioSesion, setDatosUsuarioSesion] = useState({});
    const [datosUsuarioRegistro, setDatosUsuarioRegistro] = useState({});
    const [validacionFormulario, setValidacionFormulario] = useState(true);
    // Estados para controlar si se trata de un formulario o el otro
    const [iniciarSesion, setIniciarSesion] = useState(true);

    const enviarFormulario = (e) =>{
        e.preventDefault();
        //validar los datos introducidos en los campos
        //Si existe error comunicarlo al usuario y poner setValidacionFormulario a false
        //registrar ó comprobar en la base de datos
        //En el caso de tratarse de un registro indicar que la operación se ha realizado con éxito e invitarlo a iniciar sesion con su nuevo login
        //Enviar al usuario a la página home con su sesion iniciada.
    }

    return (
        <div className="grid">
            <div className="card">   
                <form id="login-formulario" onSubmit={(e)=>{enviarFormulario(e)}} className="login-formulario">
                <div><div className="imagen-logo">
                    <Link href="/">
                        <a>
                            <Image src="/logo_vocablo.svg" width={400} height={130} layout="responsive" priority="true"/> 
                        </a>
                    </Link> 
                </div>
                </div>          
                    <div className="login-texto">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className={validacionFormulario ? "fa fa-lock fa-stack-1x" : "fa fa-lock fa-stack-1x error"}></i>
                        </span>
                    </div>
                { iniciarSesion === false ?
                    (<>
                        <input type="text" className="login-email" value={""} required={true} placeholder="Nombre"/>
                        <input type="email" className="login-email"  value={""} required={true} placeholder="Email" />
                        <input type="password" className="login-password" value={""} required={true} placeholder="Password"/>
                        <input type="submit" name="Registrarme" value="Registrarme" className="login-enviar" />
                    </>
                    ):(
                        <>
                        <input type="email" className="login-email" value={""} required={true} placeholder="Email" />
                        <input type="password" className="login-password" value={""} required={true} placeholder="Password"/>
                        <input type="submit" name="Iniciar Sesion" value="Iniciar Sesion" className="login-enviar" />
                        </>
                    )
                } 
                {/*Reseteamos los campos del formulario y cambiamos el state para cambiar de formulario*/}
                    <div>
                        <button onClick={()=>{document.getElementById("login-formulario").reset(); setIniciarSesion(!iniciarSesion);}}>{ iniciarSesion ? "Registrarme" : "Iniciar Sesión"}</button>      
                    </div>
                </form>
            </div>
            <div className="card">
                <h3 className="citas">Frases celebres diarias</h3>
            </div>

            {/* pasar los estilos del formulario a documento externo para importar */}
            <style jsx>{`

                body,
                html {
                height: 100%;
                }

                body {
                font-family: "Fredoka One", cursive;
                font-weight: 400;
                display: flex;
                overflow: hidden;
                }

                button{
                color: #FFC172;
                background: transparent;
                border: none;
                font-size: 1rem;
                padding: 1.2rem;
                }
                button:hover{
                    color:white;
                }

                input ::-webkit-input-placeholder {
                color: rgba(255, 255, 255, 0.7);
                }
                input ::-moz-placeholder {
                color: rgba(255, 255, 255, 0.7);
                }
                input :-ms-input-placeholder {
                color: rgba(255, 255, 255, 0.7);
                }
                input:focus {
                outline: 0 transparent solid;
                }
                input:focus ::-webkit-input-placeholder {
                color: rgba(0, 0, 0, 0.7);
                }
                input:focus ::-moz-placeholder {
                color: rgba(0, 0, 0, 0.7);
                }
                input:focus :-ms-input-placeholder {
                color: rgba(0, 0, 0, 0.7);
                }
                .imagen-logo{
                    margin: auto;
                    display: block;     
                }
                .imagen-logo:hover{
                    cursor: pointer;
                }
                .login-formulario {
                    margin: auto;
                width: 80%;
                padding: 2rem;
                background: #101217;
                border-radius: 20px; 
                }
                .login-texto {
                color: white;
                font-size: 1.5rem;
                margin: 0 auto;
                max-width: 50%;
                padding: 0.5rem;
                text-align: center;
                }
                .login-texto .fa-stack-1x {
                color: black;
                }
                .login-texto .error {
                color: tomato;
                }

                .login-email,
                .login-password {
                background: transparent;
                border: 0 solid;
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
                color: white;
                display: block;
                margin: 1rem;
                padding: 0.5rem;
                transition: 250ms background ease-in;
                width: calc(100% - 3rem);
                }
                .login-email:focus,
                .login-password:focus {
                background: white;
                color: black;
                transition: 250ms background ease-in;
                }

                .login-enviar {
                border: 1px solid white;
                width:150px;
                background: transparent;
                color: white;
                display: block;
                margin: 3rem auto;
                min-width: 1px;
                padding: 0.75rem;
                transition: 250ms background ease-in;
                }
                .login-enviar:hover, .login-enviar:focus {
                background: white;
                color: black;
                transition: 250ms background ease-in;
                }

                [class*=underlay] {
                left: 0;
                min-height: 100%;
                min-width: 100%;
                position: fixed;
                top: 0;
                }

                .grid {
                
                display:grid;
                margin: 3%;
                grid-template-columns: 40% 50% auto;
             
                width:90%;
                text-aling: center;
                
                }
                .card{
                margin: auto;
                width:90%;
                
                text-aling: center;
                
                } 
                .citas{
                    font-family: "Arial";
                }

                @-webkit-keyframes hue-rotate {
                from {
                    -webkit-filter: grayscale(30%) hue-rotate(0deg);
                }
                to {
                    -webkit-filter: grayscale(30%) hue-rotate(360deg);
                }
                }

                        @keyframes hue-rotate {
                        from {
                            -webkit-filter: grayscale(30%) hue-rotate(0deg);
                        }
                        to {
                            -webkit-filter: grayscale(30%) hue-rotate(360deg);
                        }
                }

            `}</style>
    </div>
    );
};

export default Formularios;