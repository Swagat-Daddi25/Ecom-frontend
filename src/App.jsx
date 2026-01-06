import "./App.css";
// import { useState, useEffect } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [products, setproducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://e-comm-backend-1-qpo6.onrender.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setproducts(data));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
