import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Titulo from "./Titulo";

const Contacto = () => {
  return (
    <>
      <Titulo title="Contacto" subtitle="Envíanos tus comentarios"  />
      
      <section style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} md={6}>
              <iframe title="mapagoogle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.0494971872213!2d-99.1694417846132!3d19.367009347792216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff95bffb3937%3A0x9bfe2666a5933e3d!2sAv.%20Universidad%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1670036687990!5m2!1ses!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{paddingTop:"10px",paddingBottom:"10px",border:"0"}}></iframe>
            </Col>
            <Col xs={12} md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Escribe tu nombre" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Escribe tu correo" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control as="textarea" placeholder="Escribe tu opinión" required/>
                </Form.Group> 

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <ul style={{ listStyle: "none", marginTop: "20px", padding:"0" }}>
                <li>Direccion: Av Universidad # 2000</li>
                <li>Teléfono: 5585989082</li>
                <li>Correo: eafo72@gmail.com</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contacto;
