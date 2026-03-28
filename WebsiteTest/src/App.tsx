import Blog from "./components/Blog";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="min-h-screen bg-orange-100 text-orange-900 overflow-hidden">
      <Navbar />

      <Hero />
      <Features />
      <Work />
      <Me />
      <Blog />

      <Footer />
    </div>
  );
}

export default App;
