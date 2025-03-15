// Q1: Build a landing page with a product display using React.js and Tailwind CSS
// Code - Saptarshi Das_22BCY10286
// Date - 15.03.2025

// Installing dependencies: npm install react-router-dom tailwindcss
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Product A", price: "$10", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$20", image: "https://via.placeholder.com/150" }
];

function Home() {
  return (
    <div>
      <header className="bg-blue-600 p-4 text-white text-center">Hero Section</header>
      <nav className="p-4 bg-gray-800 text-white"><Link to="/">Home</Link></nav>
      <div className="grid grid-cols-2 gap-4 p-4">
        {products.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className="border p-2">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.price}</p>
          </Link>
        ))}
      </div>
      <footer className="bg-gray-700 text-white p-4 text-center">Footer</footer>
    </div>
  );
}