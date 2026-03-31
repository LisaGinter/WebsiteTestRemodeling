export const codeExamples = {
  "App.tsx": `
import { FormattedMessage } from "react-intl";

import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
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
      <Work />
      <Me />
      <Blog />

      <Footer />
    </div>
  );
}

export default App;

    `,
  "Navbar.tsx": `
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "../../../common/index.css";
import { FormattedMessage } from "react-intl";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-orange-800/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="/asakusa.jpg"
                alt="Lisa Asakusa"
                className="w-6 h-6 sm:w-12 sm:h-12"
              ></img>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-red-700">Lisa</span>
              <span className="text-orange-700">Ginter</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#hero"
              className="text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.hero"></FormattedMessage>
            </a>
            <a
              href="#me"
              className="text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.me"></FormattedMessage>
            </a>
            <a
              href="#work"
              className="text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.work"></FormattedMessage>
            </a>
            <a
              href="#features"
              className="text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.features"></FormattedMessage>
            </a>
            <a
              href="#blog"
              className="text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.blog"></FormattedMessage>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-orange-800 hover:text-400"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-orange-800/20 backdrop-blur-lg border-t border-orange-700 slide-in-from-top duration-300">
          <div>
            <a
              href="#hero"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.hero"></FormattedMessage>
            </a>
            <a
              href="#me"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.me"></FormattedMessage>
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.work"></FormattedMessage>
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.features"></FormattedMessage>
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-orange-800 hover:text-orange-400 text-sm lg:text-base"
            >
              <FormattedMessage id="navbar.blog"></FormattedMessage>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
    `,
  "Provider.tsx": `
import { IntlProvider } from "react-intl";
import { LOCALES } from "./constants";
import { Fragment } from "react/jsx-runtime";
import tranlations from "./translations";
import type { ReactNode } from "react";

const Provider = ({
  children,
  locale = LOCALES.ENGLISH,
}: {
  children: ReactNode;
  locale: string;
}): React.JSX.Element => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={tranlations[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
`,
};
