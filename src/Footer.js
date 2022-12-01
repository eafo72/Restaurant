import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import "./fonts/ionicons.min.css";
import logo_footer from "./images/logo_restaurant.png";


export const Footer = () => {

    const link_facebook = 'https://www.facebook.com';
    const link_youtube = 'https://www.youtube.com';
   



  return (
    <footer className="footer-dark">
      <Container>
        <Row>
          <Col xs={12} lg={1} style={{ padding: 0 }} className="d-flex align-items-center justify-content-center">
            <p id="logo_footer">
              <img src={logo_footer} alt="" />
            </p>
          </Col>
          <Col xs={12} lg={5} style={{ padding: 0 }} className="d-flex align-items-center justify-content-center">
            <p id="marca_footer">
              {" "}
              Restaurant ® 2022 Todos los derechos reservados.
            </p>
          </Col>
          <Col xs={12} lg={3} style={{ padding: 0 }} className="d-flex align-items-center justify-content-center">
            <p
              style={{
                textAlign: "center",
                fontSize: ".75rem",
                paddingTop: "8px",
              }}
            >
              Proyecto 4
            </p>
          </Col>
          <Col xs={12} lg={3} style={{ padding: 0 }} className="d-flex align-items-center justify-content-center">
            <div className="item social">
              <a href={link_facebook} target="_blank" rel="noopener noreferrer">
                <i className="icon ion-social-facebook"></i>
              </a>
              
              <a href={link_youtube} target="_blank" rel="noopener noreferrer">
                <i className="icon ion-social-youtube-outline"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

