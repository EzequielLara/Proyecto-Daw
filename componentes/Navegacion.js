import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavUsuario from './NavUsuario';

const Navegacion = () => {
    return (
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
          <Link href={"/"}>
          <a>
            <img alt="Logo vocablo"
                 src="/logo_vocablo.svg"
                 width="170"
                 className="d-inline-block align-top"
            />
          </a>
          </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          {/* investigar que pasa con los link y nav.link */}
            <Link href={"/home"} className='text-black'><a>Home</a></Link>
            <Link href="/creargrupo">Crear grupo de trabajo</Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
               <NavUsuario usuario={{nombre:"Jose Juan"}}></NavUsuario>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navegacion;