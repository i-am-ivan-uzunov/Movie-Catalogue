import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Register from "./components/Register";
import AddMovie from "./components/AddMovie";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Header />
      <Login />
      <Register />
      <AddMovie />
      <Footer />
    </>
  );
}
