// import { FormattedMessage } from "react-intl";

import Blog from "../../Pages/Blog";
import Impressum from "../../Pages/Impressum";
import MainPage from "../../Pages/MainPage";
import Me from "../../Pages/Me";
import Skills from "../../Pages/Skills";
import Work from "../../Pages/Work";
import { Layout } from "./components/Layout";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/me" element={<Me />} />
          <Route path="/impressum" element={<Impressum />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
