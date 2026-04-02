import { FormattedMessage } from "react-intl";

import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Features from "./components/Features";
import Me from "./components/Me";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-orange-100 text-orange-900 overflow-hidden">
      <FormattedMessage id="navbar.me"></FormattedMessage>
      <Navbar />

      <Hero />
      <Features />
      <Skills />
      <Work />
      <Me />
      <Blog />

      <Footer />
    </div>
  );
}

export default App;
