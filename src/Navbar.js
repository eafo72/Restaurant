import { Navbar, Container, Nav } from "react-bootstrap";

import logo from "./images/logo_restaurant.png";

export function MyNavbar() {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{width: "60px", height: "60px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/reservar">Reservar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
