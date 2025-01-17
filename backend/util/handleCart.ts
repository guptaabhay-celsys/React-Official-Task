type Product = {
    id: string | number;
    quantity?: number,
    name: string;
    price: number;
    image: string;
    userId: number
  };


export const addToCart = async (product: Product) => {
    try {
      const response = await fetch("http://localhost:3000/cart/add-to-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message);
    } catch (error) {
      console.error("Error adding to wishlist", error);
    }
  };
  
  export const removeFromCart = async (productId: string| number, userId: number) => {
    try {
      const response = await fetch("http://localhost:3000/cart/remove-from-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, userId }),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };