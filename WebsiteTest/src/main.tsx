import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/App/index.css";
import App from "./components/App/App";
import { I18nProvider } from "./common/i18n";
import { LOCALES } from "./common/i18n/constants";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider locale={LOCALES.GERMAN}>
      <App />
    </I18nProvider>
  </StrictMode>,
);
