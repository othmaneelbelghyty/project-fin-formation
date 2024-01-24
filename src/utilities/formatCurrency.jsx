import React from "react";
export function CurrencyFormatter({ number }) {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);

  return <div>{formattedCurrency}</div>;
}
