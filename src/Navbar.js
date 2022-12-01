import { Navbar, Container, Nav } from "react-bootstrap";

import logo from "./images/logo_restaurant.png";
import { Link } from "react-router-dom";

export function MyNavbar() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{ width: "60px", height: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
              <Link className="nav-link linkformat" to="/">Home</Link>
            
              <Link className="nav-link linkformat" to="contacto">Contacto</Link>
            
              <Link className="nav-link linkformat" to="reservar">Reservar</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
