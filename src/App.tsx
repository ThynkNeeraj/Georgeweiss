import { Hero } from "@/components/page/hero/hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mid } from "@/components/page/mid/mid";
// import Girl from "@/components/page/hero/girl"; 
import Popular from"@/components/page/hero/Popular";
import { TransformationGalleryButton , HeadingPage } from "@/components/transformationbutton";
 // ← Add /hero/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Mid />
          {/* <Girl /> */}
          <Popular/>
          <TransformationGalleryButton  />
          <HeadingPage />
        </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;