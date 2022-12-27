import { useEffect, useState } from "react";




const AppDomain = () => {
    const [palabras, setPalabras] = useState(['manzana', 'pera', 'plátano', 'cacahuete', 'frambuesa', 'fresa', 'dragón', 'dinosaurio', 'abeja', 'tigre','tonto tú papá', '236.544.546', 'pedo culo lerdo y feo quien lo lea ']);
    const [contador, setContador] = useState(0);
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
       setTimeout(()=>{
           reproduce(palabras[contador]);
        }, 1000);
        
    },[contador]);
    useEffect(()=>{
       setTimeout(()=>{
           setDisabled(false); //Para que no se pueda cambiar de palabra hasta que termine de decirla
        }, 1500);
        
    },[contador]);

    const reproduce=(text)=>{
        if(window['speechSynthesis'] === undefined) {
            return;
        }
        const  reproductor= window.speechSynthesis;
        const reproduceEstaPalabra= new SpeechSynthesisUtterance(text);
        reproductor.speak(reproduceEstaPalabra);
    }
    return (
        <>
        {}
        <div className="d-flex align-items-center estilo">
            <button className="border-0 bg-transparent " 
                    onClick={()=>{setContador(contador - 1); setDisabled(true)}}
                    disabled={disabled}>

            {contador > 0 ? (<i className="bi bi-arrow-left-circle icono hover"></i>):('')} 
            </button>
            <div className="box w-75 m-auto text-success">
                <h1 className="text-center letra fw-bold">{palabras[contador]}</h1>
            </div>
            <button className="border-0 bg-transparent" 
                    onClick={()=>{setContador(contador + 1); setDisabled(true)}}
                    disabled = {disabled}> 
                    
            {contador < palabras.length -1 ? (<i className="bi bi-arrow-right-circle icono hover"></i>):('')}
            </button>
        </div>
        <div>
        </div>
        <style>{`
            .estilo{
                min-height: 100vh;
            }
            .letra{
                font-size: 9rem;
                color:#393d42;
            }
            .icono{
                font-size: 5rem;
                color:#dcdcdc;
                padding:1rem;
            }
            .hover:hover{
                color: #a7a7a7
            }
        `}</style>
        </>
    );
};

export default AppDomain