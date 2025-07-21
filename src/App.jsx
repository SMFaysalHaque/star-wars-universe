import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Character from "./pages/Character";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="min-h-screen bg-[#101418]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
