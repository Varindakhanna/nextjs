// fetching api from client side component

"use client"
import { useEffect, useState } from "react";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setProduct(data.products);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h3>{item.title}</h3>
      ))}
    </div>
  );
}

