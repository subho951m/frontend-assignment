import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarComp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Estatery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link as={Link} to="/rent">Rent</Nav.Link>
            <Nav.Link as={Link} to="/buy">Buy</Nav.Link>
            <Nav.Link as={Link} to="/sell">Sell</Nav.Link>
            <NavDropdown title="Manage Property" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/manage/1">Manage 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/manage/2">Manage 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/manage/3">Manage 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resource" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/resource/1">Resource 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resource/2">Resource 2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resource/3">Resource 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Button as={Link} className="mx-2" to="/login" variant="outline-primary">Login</Button>
          <Button as={Link} to="/signup" variant="primary">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;