const BaseUrl = "http://localhost:5000/products";

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

