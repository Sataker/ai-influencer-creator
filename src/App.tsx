import { Routes, Route, Navigate } from "react-router-dom";
import BackgroundOrbs from "./components/BackgroundOrbs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Landing from "./pages/Landing";
import Quiz from "./pages/Quiz";
import Generating from "./pages/Generating";
import Result from "./pages/Result";
import Plans from "./pages/Plans";

export default function App() {
  return (
    <>
      <BackgroundOrbs />
      <Navbar />
      <ScrollToTop />
      <div className="relative z-10 pt-16 min-h-screen flex flex-col">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/gerando" element={<Generating />} />
            <Route path="/resultado" element={<Result />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
