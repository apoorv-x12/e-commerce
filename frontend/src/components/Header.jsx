import {Container,Navbar,Nav} from 'react-bootstrap'
import {FaShopify, FaUser, FaShoppingCart  } from "react-icons/fa";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar expand="md" bg="dark" variant="dark" collapseOnSelect>
       <Container>
        <LinkContainer to={'/'}>
            <Navbar.Brand > 
            <FaShopify/> E-commmerce 
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to={'/cart'}>
                <Nav.Link>
                  <FaShoppingCart/> Cart
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to={'/login'}>
                <Nav.Link > 
                        < FaUser/> Login
                </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header