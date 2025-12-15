import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Domains from "./pages/Domains";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domains" element={<Domains />} />
      </Routes>

      <Content />
    </BrowserRouter>
  );
};

export default App;
