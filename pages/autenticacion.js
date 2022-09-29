import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Head from "next/head";
import Formulario from "../componentes/Formulario";
import Eslogan from '../componentes/Eslogan';

const Autenticacion = () => {
    return (
        <>
            <Head>
                <title>vocablo - formulario</title>
                <meta name="formulario" content="Formulario de registro" />
                <link rel="icon" href="/icono_vocablo.svg"></link>
            </Head>
            <div className="w-100 bg-transparent pt-3" >
            <Container className="pt-4">
                <Row>
                    <Col className="bg-transparent pt-3" xs={12} sm={6} lg={4}>
                        <Formulario/>
                    </Col>
                    <Col className='bg-transparent m-auto pt-5'>
                        <Eslogan/>
                    </Col>
                </Row>
            </Container>
            </div>

            
           
            
              
          
        </>
    );
};

export default Autenticacion;