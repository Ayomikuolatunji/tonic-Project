import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Footer from "./Layouts/Footer/Footer";
import AboutScreen from "./pages/Abouts";

function App() {
  const location = useNavigate();

  useEffect(() => {
    location("/about", { replace: true });
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
