import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Character from "./pages/Character";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToTop />
        <main className="min-h-screen bg-[#101418]">
          <div className="lg:w-[1024px] w-full mx-auto xl:px-0 px-4 pt-28 pb-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character/:id" element={<Character />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
