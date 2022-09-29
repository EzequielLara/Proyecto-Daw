import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'next/image';

const Avatares = ({getPerro}) => {

    const personajes = ['/perretes/perro1.png', '/perretes/perro2.png','/perretes/perro4.png', '/perretes/perro6.png', '/perretes/perro7.png', '/perretes/perro8.png','/perretes/perro9.png', '/perretes/perro10.png', '/perretes/perro11.png', '/perretes/perro12.png','/perretes/perro13.png', '/perretes/perro14.png', '/perretes/perro15.png', '/perretes/perro16.png','/perretes/perro17.png'];
    return (
        <>
            
            <Container fluid='lg' className='w-50 mt-5'>
                <Row lg={12}>
                {personajes.map(per=>(
                    <Col className="bg-transparent " xs={12} sm={6} lg={2}>
                    <img src={per} width='95' alt={per} className="m-auto estiloFila p-1" onClick={(e)=>{getPerro(e.target.src)}}/>
                    </Col>
                 ))}  
                </Row>
            </Container>
            <style>{`
            
            .estiloFila:hover{
                border: 7px solid orange;
                border-radius: 50%;
                margin: auto;
                cursor: pointer;


                }
            `}

            </style>
        </>
        
    );
};

export default Avatares;