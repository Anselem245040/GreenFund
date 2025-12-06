const BaseUrl = "http://localhost:5000/products";
const CartUrl = "http://localhost:5000/cart";

export const fetchProducts = async () => {
  try {
    const response = await fetch(BaseUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCartItems = async () => {
  try {
    const response = await fetch(CartUrl);
    if (!response.ok) {
      throw new Error("Error fetching items");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
