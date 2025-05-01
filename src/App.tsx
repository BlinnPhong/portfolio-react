import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SymfonyProjectPage from "./components/SymfonyProjectPage";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter basename="portfolio-react">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/mediatekformationsproject"
              element={<SymfonyProjectPage />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
