// // Pages/ProductList.js
// import React from "react";
// import ProductCard from "../Components/ProductCard";

// export default function ProductList({ toggleCart }) {
//   const products = [
//     {
//       id: 1,
//       // name: "Dhoop Cone",
//       price: 120,
//       desc: "Refreshing fragrance",
//       img: "https://via.placeholder.com/120x120.png?text=Dhoop+Cone",
//     },
//     {
//       id: 2,
//       name: "Stick Dhoop",
//       price: 150,
//       desc: "Long lasting stick dhoop",
//       img: "https://via.placeholder.com/120x120.png?text=Stick+Dhoop",
//     },
//     {
//       id: 3,
//       name: "Sambrani Cups",
//       price: 200,
//       desc: "Traditional sambrani cups",
//       img: "https://via.placeholder.com/120x120.png?text=Sambrani+Cups",
//     },
//   ];

//   return (
//     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           toggleCart={toggleCart}
//         />
//       ))}
//     </div>
//   );
// }
