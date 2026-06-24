"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  name: string;
  price: number;
  originalPrice?: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (name: string) => void;
  total: number;
  selectedCar: { brand: string; model: string; fuel: string } | null;
  setSelectedCar: (car: { brand: string; model: string; fuel: string } | null) => void;
}

const CartContext = createContext<CartContextType>({ items: [], addItem: () => {}, removeItem: () => {}, total: 0, selectedCar: null, setSelectedCar: () => {} });

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [selectedCar, setSelectedCar] = useState<{ brand: string; model: string; fuel: string } | null>(null);

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.name === item.name)) return prev;
      return [...prev, item];
    });
  };

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total, selectedCar, setSelectedCar }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
