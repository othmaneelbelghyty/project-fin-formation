import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <select>
      <option value="">Choose a product...</option>
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default SearchBar;
