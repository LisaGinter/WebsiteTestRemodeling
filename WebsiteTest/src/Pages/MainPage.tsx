import { ArrowRight, ChevronDown, Hammer, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples } from "../data/CodeExamplex";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { floatingCards } from "../data/FloatingCards";
import Features from "../components/App/components/Features";

type TabName = "App.tsx" | "Navbar.tsx" | "Provider.tsx";

export default function MainPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<TabName>("App.tsx");
  const currentFloatingCard = floatingCards[activeTab];

  useEffect(() => {
    function onMouseMove(e: { clientX: number; clientY: number }) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgb(187, 105, 143, 0.5), transparent 40%)`,
          }}
        />
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/10 rounded-fill blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-800/30 rounded-fill blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto text-center relative w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">
            {/* description */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bot duration-700">
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span className="text-xs sm:text-sm text-orange-400">
                  <FormattedMessage id="hero.intro.header"></FormattedMessage>
                </span>
              </div>

              <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bot duration-700 delay-100 leading-tight">
                <span className="bg-gradient-to-b from-yellow to-amber-500 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Code Faster
                </span>
                <span className="bg-gradient-to-b from-orange-800 to-yellow-500 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  Code Better
                </span>
                <span className="bg-gradient-to-b from-yellow to-amber-500 bg-clip-text text-transparent block mb-1 sm:mb-2">
                  With me
                </span>
              </h1>

              <p className="text-md sm:text-base lg:text-lg text-amber-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bot duration-700 delay-200">
                <FormattedMessage id="hero.intro.message"></FormattedMessage>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb:8 sm:mb-12 animate-in slide-in-from-bot duration-700 delay-300">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-amber-600 to-amber-400 rounded-lg font-semi-bold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                  <span>
                    <FormattedMessage id="hero.intro.about-projects"></FormattedMessage>
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-800/10 backdrop-blur-sm border border-orange-800/15 rounded-lg font-semi-bold text-sm sm:text-base transition-all duration-300 hover:bg-orange-800/20 flex items-center justify-center space-x-2">
                  <div>
                    <Hammer className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-800" />
                  </div>
                  <span>
                    <FormattedMessage id="hero.intro.skills"></FormattedMessage>
                  </span>
                </button>
              </div>
            </div>
            {/* code */}
            <div className="relative order-2 w-full">
              <div className="relative bg-amber-900/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-amber-500/30">
                <div className="bg-gradient-tb from-amber-800/20 to amber-500/20 backdrop-blur-sm rounded-lg h[280px] sm:h[350px] lg:[450px] border border-amber-500/15">
                  {/* IDE HEADER */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-amber-500/5 backdrop-blur-sm border-b border-amber-500/15">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs sm:text-sm text-red-700">
                        <FormattedMessage id="hero.code-editor-header"></FormattedMessage>
                      </span>
                    </div>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-700" />
                  </div>
                  <div className="p-3 sm:p-4 relative h-full">
                    {/* file tabs */}
                    <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                      <button
                        onClick={() => setActiveTab("App.tsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-sx sm:text-sm rounded-t-lg border ${
                          activeTab === "App.tsx"
                            ? "bg-orange-500/20 border-yellow-500/30"
                            : "bg-orange-700/15 text-red-700 border-amber-500/15 hover:bg-amber-500/30"
                        } transition-all duration-200 whitespace-nowrap`}
                      >
                        App.tsx
                      </button>
                      <button
                        onClick={() => setActiveTab("Navbar.tsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-sx sm:text-sm rounded-t-lg border ${
                          activeTab === "Navbar.tsx"
                            ? "bg-orange-500/20 border-yellow-500/30"
                            : "bg-orange-700/15 text-red-700 border-amber-500/15 hover:bg-amber-500/30"
                        } transition-all duration-200 whitespace-nowrap`}
                      >
                        Navbar.tsx
                      </button>
                      <button
                        onClick={() => setActiveTab("Provider.tsx")}
                        className={`px-3 py-2 backdrop-blur-sm text-sx sm:text-sm rounded-t-lg border ${
                          activeTab === "Provider.tsx"
                            ? "bg-orange-500/20 border-yellow-500/30"
                            : "bg-orange-700/15 text-red-700 border-amber-500/15 hover:bg-amber-500/30"
                        } transition-all duration-200 whitespace-nowrap`}
                      >
                        Provider.tsx
                      </button>
                    </div>

                    {/* code content */}
                    <div className="relative overflow-auto h-100 scrollbar-thin webkit-scrollbar-track webkit-scrollbar-thumb">
                      <SyntaxHighlighter
                        language="typescript"
                        style={gruvboxLight}
                        customStyle={{
                          margin: 0,
                          borderRadius: "8px",
                          fontSize: "11px",
                          lineHeight: "1.4",
                          height: "100%",
                          border: "1px solid #fce1a8",
                        }}
                      >
                        {codeExamples[activeTab]}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>

                {/* floating Cards */}
                <div
                  className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border-white/20 shadow-2xl`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className={`w-8 h-6 ${currentFloatingCard.iconColor} flex items-center text-left text-sm font-bold`}
                    >
                      {currentFloatingCard.icon}
                    </div>
                    <span
                      className={`text-sm font-medium ${currentFloatingCard.textColor}`}
                    >
                      <FormattedMessage
                        id={`hero.floating-cards.title.${currentFloatingCard.id}`}
                      ></FormattedMessage>
                    </span>
                  </div>
                  <span
                    className={`text-sm text-left ${currentFloatingCard.contentColor}`}
                  >
                    <FormattedMessage
                      id={`hero.floating-cards.description.${currentFloatingCard.id}`}
                    ></FormattedMessage>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
}
