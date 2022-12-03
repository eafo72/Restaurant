import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import Mesa from "./images/mesa.jpg";

import Titulo from "./Titulo";

import { db } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const Reservar = () => {
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const [fecha, setFecha] = useState();
  const [hora, setHora] = useState();
  const [Users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "usuarios"), {
      name: nombre,
      email: correo,
      date: fecha,
      time: hora,
    });
    alert("FELICIDADES, se ha guardado tu reserva");

    document.getElementById("formularioReserva").reset();
  };

  
  const getData = async () => {
    onSnapshot(collection(db, "usuarios"), (snapshot) => {
      
      setUsers(snapshot.docs.map((doc) => doc));
      
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Titulo title="Reservar" subtitle="Será un placer que nos visites" />

      <section style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} md={6}>
              <img
                src={Mesa}
                alt=""
                className="img-fluid"
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
              ></img>
            </Col>
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit} id="formularioReserva">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Escribe tu nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Escribe tu correo"
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setFecha(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    type="time"
                    onChange={(e) => setHora(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Reservar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container style={{paddingTop:"40px",paddingBottom:"40px"}}>
          <Row>
            <Col xs={12}>
                <h2 align="center">Lista de Reservaciones</h2>
            </Col>
          </Row>  
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                </tr>
              </thead>
              <tbody>
                {Users && //indica que lo haga si no es undefined o null
                Users.map((e, index) => {
                  const { name, date, time } = e.data();
                  return <tr key={index}>
                    <td>{e.id}</td>
                    <td>{name}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                  </tr>;
                })}
              </tbody>
            </Table>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Reservar;
