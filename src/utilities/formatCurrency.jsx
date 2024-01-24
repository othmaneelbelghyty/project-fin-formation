import React from "react";
import { FormattedNumber } from "react-intl";

const CURRNCY_FORMATTER = {
  format: (number) => (
    <FormattedNumber value={number} style="currency" currency="USD" />
  ),
};

export function formatCurrency(number) {
  return CURRNCY_FORMATTER.format(number);
}
