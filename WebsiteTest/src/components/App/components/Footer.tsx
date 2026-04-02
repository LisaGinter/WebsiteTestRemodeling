import { FormattedMessage } from "react-intl";

export default function Footer() {
  <script
    src="https://kit.fontawesome.com/86c6b473ff.js"
    crossOrigin="anonymous"
  ></script>;
  return (
    <div className="text-center relative w-full z-50 transition-all duration-300 bg-orange-800/20 backdrop-blur-sm">
      <span className="flex flex-row justify-center space-x-4">
        <div className="items-center space-x-2">
          <a href="https://www.linkedin.com/in/lisa-ginter-708a84196/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.linkedin.com/in/lisa-ginter-708a84196/">LI</a>
        </div>
        <div className="items-center space-x-2">
          <a href="https://github.com/LisaGinter">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://github.com/LisaGinter">GH</a>
        </div>
      </span>
      <span>
        <div className="space-x-4">
          <i className="fa-regular fa-copyright"></i> 2026 Lisa Ginter
        </div>
      </span>
      <span>
        <div>
          <a href="/src/pages/impressum-datenschutz.html">
            <FormattedMessage id="footer.impressum"></FormattedMessage>
          </a>
        </div>
      </span>
    </div>
  );
}
