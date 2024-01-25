import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Welcome to our car showroom! Here are some of the amazing cars we have
        in stock:
      </p>

      <Row xs={1} md={2} lg={3} className="g-4">
        {storeItems.map((car) => (
          <Col key={car.id}>
            <Card>
              <Card.Img variant="top" src={car.imgUrl} />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>Price: ${car.price.toLocaleString()}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default About;
