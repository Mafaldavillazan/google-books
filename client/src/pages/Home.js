import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";

function Home() {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <h3>Welcome to the page to discover the next best seleller</h3>
            <h4>The best books are comming</h4>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id </p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}


export default Home;