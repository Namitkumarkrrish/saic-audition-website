import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Domains from "./pages/Domains";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
