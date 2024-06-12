import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import HomePage from "./assets/pages/home";
import Modal from "./assets/component/modal";
import About from "./assets/pages/about";
import Portfolio from "./assets/pages/portfolio";

function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Modal modalChildren={<Portfolio />} />} />
        <Route path="/about" element={<Modal modalChildren={<About />} />} />
      </Routes>
      {previousLocation && (
        <Routes>
        <Route path="/about" element={<Modal modalChildren={<About />} />} />
        <Route path="/projects" element={<Modal modalChildren={<Portfolio />} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
