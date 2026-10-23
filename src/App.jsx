import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieCatalogue from "./components/MovieCatalogue";
import AddMovie from "./components/AddMovie";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<MovieCatalogue />} />

        <Route element={<GuestGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AuthGuard />}>
          <Route path="/add-movie" element={<AddMovie />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
