import { FormattedMessage } from "react-intl";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "titel1",
    description: "beschreibung1",
    image: `
useEffect(() => {
  function onMouseMove(e: { clientX: number; clientY: number }) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }
  window.addEventListener("mousemove", onMouseMove);

  return () => window.removeEventListener("mousemove", onMouseMove);
}, []);
    `,
    imagePosition: "left",
  },
  {
    title: "titel2",
    description: "beschreibung2",
    image: `
<button
  className="md:hidden p-2 text-orange-800 hover:text-400"
  onClick={() => setMobileMenuIsOpen((prev) => !prev)}
>
  {mobileMenuIsOpen ? (
    <X className="w-5 h-5 sm:w-6 sm:h-6" />
  ) : (
    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
  )}
</button>`,
    imagePosition: "right",
  },
  {
    title: "titel3",
    description: "beschreibung3",
    image: `
    
<button
  onClick={() => setActiveTab("Provider.tsx")}
  className={\`px-3 py-2 backdrop-blur-sm text-sx sm:text-sm rounded-t-lg border \${
    activeTab === "Provider.tsx"
      ? "bg-orange-500/20 border-yellow-500/30"
      : "bg-orange-700/15 text-red-700 border-amber-500/15 hover:bg-amber-500/30"
  } transition-all duration-200 whitespace-nowrap\`}
>
  Provider.tsx
</button>`,
    imagePosition: "left",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 sm:pz-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Tagphrase for features
            </span>
            <br />
            <span className="bg-gradient-to-b from-red-400 to-orange-300 bg-clip-text text-transparent">
              another catch phrase
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row item-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
            >
              {/* image/code */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-800/20 to-yellow-900/20 rounded-xl sm:rounded-2xl transition-all duration-500" />
                  <div className="relative bg-amber-900/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl border border-amber-500/30 group-hover:border-3 group-hover:border-yellow-100/80 transition-all duration-300">
                    {/* IDE interface */}
                    <div className="bg-yellow-100/80 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-red-700 ml-2 sm:ml-4 text-xs sm:text-sm">
                          <FormattedMessage
                            id={`features.codesnippet.${feature.title}`}
                          ></FormattedMessage>
                        </span>
                      </div>
                      <div>
                        <SyntaxHighlighter
                          language="typescript"
                          style={gruvboxLight}
                          customStyle={{
                            margin: 0,
                            background: "transparent",
                            borderRadius: "8px",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                            height: "100%",
                          }}
                          wrapLines={true}
                        >
                          {feature.image}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* text section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-amber-300">
                    <FormattedMessage
                      id={`features.codesnippet.${feature.title}`}
                    ></FormattedMessage>
                  </h3>
                  <p className="text-red-800 text-base text-xl sm:text-lg leading-relaxed">
                    <FormattedMessage
                      id={`features.codesnippet.${feature.description}`}
                    ></FormattedMessage>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
