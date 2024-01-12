import Price from "./price";
// fetching api from client side component

// "use client"
// import { useEffect, useState } from "react";

// export default function Product() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       let data = await fetch("https://dummyjson.com/products");
//       data = await data.json();
//       setProduct(data.products);
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {product.map((item) => (
//         <h3>{item.title}</h3>
//       ))}
//     </div>
//   );
// }

// fetching api from server side component
async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
export default async function Product() {
  let product = await productList();
  //console.log("===");
  return (
    <div>
      <h1>Product List</h1>
      <div></div>
      {product.map((item) => (

       <div>
         <h3>{item.title}</h3>
         <Price price={item.price }/>
       </div>
       
         
))}
    </div>
  );
}
