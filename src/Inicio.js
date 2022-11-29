import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import { MyNavbar } from "./Navbar";
import { Footer } from "./Footer";

const inicio = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col
            xs={12}
            lg={1}
            style={{ padding: 0 }}
            className="d-flex align-items-center justify-content-center"
          >
            <div>Contenido</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default inicio;
