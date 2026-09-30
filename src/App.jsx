import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default function App() {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
}
