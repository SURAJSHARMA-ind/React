import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-gray-900 text-gray-100 shadow-md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-gray-100 hover:text-gray-300">Home</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/cart" className="text-gray-100 hover:text-gray-300">Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* Add more navigation items here if needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
