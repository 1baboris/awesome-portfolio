import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <main className="dark">
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <Hero isEnglish={isEnglish} />
      <AboutMe isEnglish={isEnglish} />
      <Projects isEnglish={isEnglish} />
      <ContactForm isEnglish={isEnglish} />
      <Footer />
    </main>
  );
}

export default App;
