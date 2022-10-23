import Link from "next/link";
const Error404 = () => {
    return (
        <>
            <div className="main">
                <h1 className='fof'>Error 4
            <Link href={"/"}>
                <a>
                    <img alt="Icono vocablo"
                        src="/icono_vocablo.svg"
                        width="60"
                        className="m-2"
                    />
                </a>
            </Link>4</h1>
            <small>Ooops! La página que busca no se encuentra en nuestros servidores</small>
            </div>
            <style jsx>{`

                body{
                    font-family: 'Lato', sans-serif;
                    color: #888;
                    margin: 0;
                }

                .main{
                    /* display: flex; */
                    height: 50vh;
                    margin:auto;
                    margin-top:20%;
                    width:50%;
                    align-items: center;
                    text-align:center;
                    min-width:315px;    
                    
                }
                
                h1{
                    margin:auto;
                    font-size: 3em;
                   
                    

                } 
                 
            `}</style>
        </>
    );
};

export default Error404;