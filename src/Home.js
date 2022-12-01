import { Container, Col, Row } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";



const Home = () => {
  const [Users1, setUsers1] = useState([]);
  const [Users2, setUsers2] = useState([]);

  const nuevoUsuario = {
    nombre: "PETER",
  };

  //getdata solo una vez
  const getData1 = async () => {
    const snapshot = await getDocs(collection(db, "usuarios"));
    //console.log(snapshot.docs.map((doc) => doc.data()))
    setUsers1(snapshot.docs.map((doc) => doc.data()));
  };

  //getdata cada vez que se actualiza la BD
  const getData2 = async () => {
    onSnapshot(collection(db, "usuarios"), (snapshot) => {
      //setUsers(snapshot.docs.map((doc) => doc.data()));
      //para obtener por ejemplo el uid debemos saltar un nivel hacia arriba:
      setUsers2(snapshot.docs.map((doc) => doc));
      //y apartir de este nivel aparacera mas info incluyendo el uid
    });
  };

  const addData = async (values) => {
    await addDoc(collection(db, "usuarios"), values);
  };

  /*
  const updateData = async (id) => {
    await updateDoc(doc(db, "usuarios",id), {nombre});
  };
*/
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "usuarios", id));
  };

  useEffect(() => {
    getData1();
    getData2();
  }, []);

  return (
    <>
      
      <Container>
        <Row>
          <Col
            xs={12}
            lg={1}
            style={{ padding: 0 }}
            className="d-flex align-items-center justify-content-center"
          >
            <button onClick={() => addData(nuevoUsuario)}>Agregar</button>
            <h4>Acá no escucha los cambios en la BD</h4>
            <ul>
              {Users1 && //indica que lo haga si no es undefined o null
                Users1.map((e, index) => {
                  return <li key={index}>{e.nombre}</li>;
                })}
            </ul>

            <h4>Acá SI escucha los cambios en la BD</h4>

            {
              //agregando uid e info de
              Users2 && //indica que lo haga si no es undefined o null
                Users2.map((e, index) => {
                  const { nombre, edad } = e.data();
                  return (
                    <div key={index} style={{ margin: "15px" }}>
                      <h6 style={{ margin: 0 }}>{e.id}</h6>
                      <h6 style={{ margin: 0 }}>{nombre}</h6>
                      <h6 style={{ margin: 0 }}>{edad}</h6>
                      <button onClick={() => deleteData(e.id)}>Borrar</button>
                    </div>
                  );
                })
            }
          </Col>
        </Row>
      </Container>
     
    </>
  );
};

export default Home;
