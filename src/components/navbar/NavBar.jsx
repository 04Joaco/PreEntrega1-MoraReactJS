import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carrito from '../CartWidget/CartWidget';



function NavBar() {
    return (
        <div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home">Caoba</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Tienda" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Sillones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                Mesas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sillas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Decoraciones
            </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
    </Container>
        <Carrito/>
    </Navbar>
        </div>
    );
}

export default NavBar;
