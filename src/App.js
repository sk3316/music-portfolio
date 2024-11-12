import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import BeatGallery from "./components/BeatGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="beats">
          <BeatGallery />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer/>      
    </div>
  );
}

export default App;
