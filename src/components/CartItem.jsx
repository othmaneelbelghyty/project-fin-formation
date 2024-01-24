import React from "react";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// import formatCurrency from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (!item) return null;

  return (
    <div className="d-flex align-items-center my-2 p-3 border rounded">
      <img
        alt={item.name}
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
        className="me-3"
      />
      <div className="flex-grow-1">
        <div className="mb-1">
          <strong>{item.name}</strong>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="me-3">{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </div>
  );
};

export default CartItem;
