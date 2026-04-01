import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import SyntaxHighlighter, { Prism } from "react-syntax-highlighter";
import { codeExamples } from "../../../data/CodeExamplex";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { floatingCards } from "../../../data/FloatingCards";

type TabName = "App.tsx" | "Navbar.tsx" | "Provider.tsx";

export default function Hero() {
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 xl:px-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgb(187, 105, 143, 0.5), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-500/30 rounded-fill blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-amber-800/30 rounded-fill blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto text-center relative w-full">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
          {/* description */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bot duration-700">
              <Sparkles />
              <span>
                <FormattedMessage id="hero.intro.header"></FormattedMessage>
              </span>
            </div>
          </div>
          {/* code */}
          <div className="relative order-2 w-full">
            <div className="relative bg-amber-900/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-amber-900/30">
              <div className="bg-gradient-tb from-amber800/20 to amber-500/20 backdrop-blur-sm rounded-lg h[280px] sm:h[350px] lg:[450px] border border-amber-900/15">
                {/* IDE HEADER */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-amber-900/5 backdrop-blur-sm border-b border-amber-900/15">
                  <div className="flex items-center space-x-2">
                    <div className="flex itemsßcenter space-x-1 sm:space-x-2">
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
                          ? "bg-orange-300/20 border-amber-900/30"
                          : "bg-amber-900/5 text-red-700 border-amber-900/15 hover:bg-amber-900/30"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      App.tsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Navbar.tsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-sx sm:text-sm rounded-t-lg border ${
                        activeTab === "Navbar.tsx"
                          ? "bg-orange-300/20 border-amber-900/30"
                          : "bg-amber-900/5 text-red-700 border-amber-900/15 hover:bg-amber-900/30"
                      } transition-all duration-200 whitespace-nowrap`}
                    >
                      Navbar.tsx
                    </button>
                    <button
                      onClick={() => setActiveTab("Provider.tsx")}
                      className={`px-3 py-2 backdrop-blur-sm text-sx sm:text-sm rounded-t-lg border ${
                        activeTab === "Provider.tsx"
                          ? "bg-orange-300/20 border-amber-900/30"
                          : "bg-amber-900/5 text-red-700 border-amber-900/15 hover:bg-amber-900/30"
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
  );
}
