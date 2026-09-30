import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Navbar />
      <Login />
      <Register />
      <AddMovie />
      <Footer />
    </>
  );
}
