import { useContext } from "react";

import AppContext from "../context";

export const useCart = () => {
  const { cartItems } = useContext(AppContext);

  let totalPrice = cartItems.reduce((sum, item) => item.itemPrice + sum, 0);

  return totalPrice;
};
