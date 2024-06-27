import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Classement from "./pages/Classement";
import Home from "./pages/Home";
import Recompenses from "./pages/Recompenses";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/recompenses" element={<Recompenses />} />
        <Route path="/classement" element={<Classement />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
