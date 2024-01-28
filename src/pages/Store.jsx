import React from "react";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const Store = () => {
  const [data, setMyData] = useState(storeItems);

  return (
    <>
      <h1>STORE-CAR</h1>

      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
