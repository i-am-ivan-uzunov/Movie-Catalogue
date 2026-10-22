import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";
import Login from "./components/Login";
import MovieNews from "./components/MovieNews";
import MovieCatalogue from "./components/MovieCatalogue";

import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<MovieCatalogue />} />
        <Route path="/news" element={<MovieNews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
      <Footer />
    </>
  );
}
