import { Container, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="parallax d-flex align-items-center justify-content-center">
        <h1 align="center" style={{ color: "white" }}>
          Bienvenido a nuestro sitio
        </h1>
      </div>
      <Container
        style={{
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Row>
          <Col
            xs={12}
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            <h2>Nuestro Menu</h2>
            <h4>Entradas:</h4>

            <ul style={{ listStyle: "none" }}>
              <li>Caldo Tlalpeño</li>
              <li>Sopa del día</li>
              <li>Consome de pollo</li>
              <li>Sopa de pasta</li>
              <li>Cocktail de Camarón</li>
              <li>Sopa de tortilla</li>
              <li>Jugo de carne</li>
              <li>Sopa de poro y papa</li>
              <li>Lentejas</li>
              <li>Dobladitas de mole</li>
            </ul>
          </Col>
          <Col
            xs={12}
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            <h4>Platos Fuertes:</h4>
            <ul style={{ listStyle: "none" }}>
              <li>Milanesa de pollo</li>
              <li>Carne asada</li>
              <li>Pepitos</li>
              <li>Orden deTacos de pastor</li>
              <li>Pescado a la tikin xic</li>
              <li>Arrachera</li>
              <li>Enchiladas suiza</li>
              <li>Enchiladas suiza</li>
              <li>Pechuga de pollo a la plancha</li>
              <li>Club Sandwich</li>
            </ul>
          </Col>

          <Col
            xs={12}
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
            <h4>Postres:</h4>
            <ul style={{ listStyle: "none" }}>
              <li>Crepas de cajeta</li>
              <li>Cheese cake</li>
              <li>Pastel de chocolate</li>
              <li>Pay helado de limón</li>
              <li>Tiramisu</li>
              <li>Bola de helado</li>
              <li>Fresas con crema</li>
              <li>Gelatina</li>
              <li>Pastel de 3 leches</li>
              <li>Flan napolitano</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
