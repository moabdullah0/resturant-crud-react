import { useState } from "react";
import "./App.css";

import LandingPage from "./components/pages/LandingPage";
import DasboardHome from "./components/Dashboard/DasboardHome";
import Navbar from "./components/Navbar";

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
