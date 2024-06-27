import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Classement from "./pages/Classement";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recompenses from "./pages/Recompenses";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recompenses" element={<Recompenses />} />
          <Route path="/classement" element={<Classement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
