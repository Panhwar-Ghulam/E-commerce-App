import React from "react";
import Header from "./components/Header";
import ProductListing from "./pages/ProductListing";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import ViewCart from "./pages/ViewCart";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/view-cart" element={<ViewCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
