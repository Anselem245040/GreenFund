import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("cart context must be in a provider");
  return context;
};
