import {Container,Navbar,Nav} from 'react-bootstrap'
import {FaShopify, FaUser, FaShoppingCart  } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <Navbar expand="md" bg="dark" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home"> <FaShopify/> E-commmerce </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart"> <FaShoppingCart/> Cart</Nav.Link>
            <Nav.Link href="/login"> < FaUser/> Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header