import React, { useState } from "react";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Row, Col, Form } from "react-bootstrap";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [filteredData, setFilteredData] = useState(storeItems);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterItems(term, selectedBrand);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    filterItems(searchTerm, brand);
  };

  const filterItems = (term, brand) => {
    const filteredItems = storeItems.filter(
      (item) =>
        item.name.toLowerCase().includes(term) &&
        (brand === "All" ||
          item.name.toLowerCase().includes(brand.toLowerCase()))
    );
    setFilteredData(filteredItems);
  };

  const brands = [
    "All",
    "BMW",
    "MERCEDES AMG",
    "LAMBORGHINI",
    "MCLAREN",
    "PORSCHE",
  ];

  return (
    <>
      <h1>SHOW-ROM-CAR</h1>

      <Form className="mb-3">
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="entre votre marque"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        <Form.Group controlId="brandFilter">
          <Form.Select
            value={selectedBrand}
            onChange={handleBrandChange}
            aria-label="Car Brands"
          >
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>

      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredData.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
