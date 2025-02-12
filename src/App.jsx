import { useState } from "react";
import "./App.css";

import LandingPage from "./pages/Landing/LandingPage";
import DasboardHome from "./pages/Dashboard/ProductCrud/TableProduct";
import Navbar from "./pages/Layout/Navbar";

function App() {
  const [nav, setNav] = useState("home");
  return (
    <div dir="rtl">
      <Navbar setNav={setNav} />
      {nav === "home" && <LandingPage />}
      {nav === "dashboard" && <DasboardHome />}
    </div>
  );
}

export default App;
