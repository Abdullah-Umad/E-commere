import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Fourth from "./pages/Fourth";
import Home from "./pages/Home";
import Second from "./pages/Second";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
