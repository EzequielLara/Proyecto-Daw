import { useState } from 'react';

import Personajes from '../../componentes/Personajes';
import Layout from '../../componentes/Layout';
import Navegacion from '../../componentes/Navegacion';
import ModalAvatar from '../../componentes/ModalAvatar';


const Avatares = () => {

    const [seleccion, setSeleccion] = useState('');
   
    const getPerro=(perro)=>{
        setSeleccion(perro); 
         
    }
  
    return (
        <>
            <Layout title="crear grupo">
                <Navegacion></Navegacion>
                {seleccion ? (<ModalAvatar seleccion={seleccion} setSeleccion={setSeleccion}></ModalAvatar>): null}
                <Personajes getPerro={getPerro}></Personajes>
            </Layout> 
            
           

        </> 
    );
};

export default Avatares;