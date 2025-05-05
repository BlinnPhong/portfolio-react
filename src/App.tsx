import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import ProjectsPage from "./components/pages/ProjectsPage";
import { useEffect } from "react";
import MediatekFormationPage from "./components/pages/MediatekFormationPage";
import MediatekDocumentPage from "./components/pages/MediatekDocumentPage";
import StagePage from "./components/pages/StagesPage";
import IdiaTechStagePage from "./components/pages/IdiaTechStagePage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Remonter la page dès que la route change
  }, [location]); // Le hook se déclenche à chaque changement de route

  return null;
}

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter basename="/portfolio-react">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/mediatekformationsproject"
              element={<MediatekFormationPage />}
            />
            <Route
              path="/mediatekdocumentsproject"
              element={<MediatekDocumentPage />}
            />
            <Route path="/stages" element={<StagePage />} />
            <Route path="/idiatechstage" element={<IdiaTechStagePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
