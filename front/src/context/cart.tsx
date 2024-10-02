"use client";

import { ICartContextType, IProduct } from "@/interfaces/interfaces";
import { createOrder } from "@/lib/server/fetchOrders";
import { fetchProductById } from "@/lib/server/fetchProducts";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const addItem = async (cartItems: IProduct[], product: number): Promise<IProduct[]> => {
  const productExists = cartItems.find((item) => item.id === product);

  if (productExists) {
    console.log("Product already in cart:", productExists);
    MySwal.fire({
      title: "Hey!",
      text: "You cannot add two identical products to the cart",
      icon: "warning",
    });
    return cartItems;
  }

  try {
    const data = await fetchProductById(product.toString());
    if (!data) {
      console.error("Product not found");
      return cartItems;
    }
const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Success!",
      text: "Product added to cart!",
      icon: "success",
    });
    return [...cartItems, data];
  } catch (error) {
    console.error("Error fetching product:", error);
    return cartItems;
  }
};

const removeItem = (cartItems: IProduct[], productId: number): IProduct[] => {
  return cartItems.filter((item) => item.id !== productId);
};

const checkout = async (cartItems: IProduct[]) => {
  try {
    const products = cartItems.map((item) => item.id);
    const token = localStorage.getItem("token");
    const res = await createOrder(token, products);
    if (res) {
      MySwal.fire({
        title: "Yey!",
        text: "your order was sent successfully!",
        icon: "success",
      });
    } else {
      MySwal.fire({
        title: "Mmm,",
        text: "Something went wrong when placing the order.",
        icon: "error",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const CartContext = createContext<ICartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
  proceedToCheckout: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(total);
    console.log("Updated total:", total);
  }, [cartItems]);

  const addToCart = async (product: number) => {
    const updateCart = await addItem(cartItems, product);
    setCartItems(updateCart);
  };

  const proceedToCheckout = () => {
    checkout(cartItems);
    setCartItems([]);
  };

  const removeFromCart = (productId: number) => {
    console.log("Removing from cart:", productId);
    setCartItems(removeItem(cartItems, productId));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, total, proceedToCheckout }}
    >
      {children}
    </CartContext.Provider>
  );
};
