import { createContext } from "react";
import { fetchProducts } from "../components/api/productsApi";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const addToCart = async (product) => {
    const res = await fetch(
      `http://localhost:5000/cart?productId=${product.id}`
    );
    const existing = await res.json();

    if (existing.length > 0) {
      const item = existing[0];
      await fetch(`http://localhost:5000/cart/${item.id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });
    } else {
      await fetch(`http://localhost:5000/cart`, {
        method: "POST",
        headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          price: product.price,
          quantity: 1,
        }),
      });
    }
    fetchProducts();
  };

  const decreaseQty = async (item) => {
    if (item.quantity === 1) {
      deleteFromCart(item.id);
      return;
    }

    await fetch(`http://localhost:5000/cart/${product.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity - 1 }),
    });

    fetchProducts();
  };

  const deleteFromCart = async (id) => {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });

    fetchProducts();
  };
  return (
    <CartContext.Provider value={{ addToCart, decreaseQty, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
