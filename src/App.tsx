import { Hero } from "@/components/page/hero/hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mid } from "@/components/page/mid/mid";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Mid />
        </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
