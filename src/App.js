 import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UserDetail from "./pages/UserDetail";
import EditUser from "./pages/EditUser";
import "./App.css";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/add-user">Ajouter un utilisateur</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/user/:id/edit" element={<EditUser />} />
      </Routes>
    </Router>
  );
}
export default App;
