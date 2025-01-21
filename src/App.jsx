

import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/pages/Landing/HeroSection";
import ServiceSection from "./components/pages/Landing/ServiceSection";

function App() {


  return (
    <div dir="rtl">
      <Navbar />
      <HeroSection/>
      <ServiceSection/>
    </div>
  );
}

export default App;
