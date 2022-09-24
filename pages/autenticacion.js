
import Head from "next/head";

const Autenticacion = () => {
    return (
        <>
            <Head>
                <title>formulario - vocablo</title>
                <meta name="formulario" content="Formulario de registro" />
                <link rel="icon" href="/icono_vocablo.svg" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700" />
                <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
            </Head>
            <div className="grid">
                <div className="columna">
                    <form className="login-formulario">
                        <p className="login-texto">
                            <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-lock fa-stack-1x"></i>
                            </span>
                        </p>
                        <input type="email" className="login-email" autofocus="true" required="true" placeholder="Email" />
                        <input type="password" className="login-password" required="true" placeholder="Password" />
                        <input type="submit" name="Login" value="Login" className="login-enviar" />
                    </form>
                </div> 
                <div className="columna">
                    <p>columna 2</p>
                </div>  
            </div>
           
            <style jsx>{`

                body,
                html {
                height: 100%;
                }

                body {
                font-family: "Open Sans";
                font-weight: 100;
                display: flex;
                overflow: hidden;
                
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

                .login-formulario {
                min-height: 10rem;
                margin: auto;
                margin-top:30px;
                max-width: 80%;
                padding: 2rem;
                background: rgba(0, 0, 0);
                border: 2px solid black;
                border-radius: 10px;
                
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
        </>
    );
};

export default Autenticacion;