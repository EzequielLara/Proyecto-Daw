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
                        width="70"
                        className="m-2"
                    />
                </a>
            </Link>4</h1>
            </div>
            <style jsx>{`

                body{
                    font-family: 'Lato', sans-serif;
                    color: #888;
                    margin: 0;
                }

                .main{
                    display: flex;
                    height: 100vh;
                    margin:auto;
                    width:80%;
                    align-items: center;
                    text-align:center;
                    min-width:100px;    
                    
                }
                
                h1{
                    margin:auto;
                    font-size: 4em;
                   
                    

                }    
            `}</style>
        </>
    );
};

export default Error404;