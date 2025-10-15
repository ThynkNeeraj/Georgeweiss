import { Hero } from "@/components/page/hero/hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mid } from "@/components/page/mid/mid";
import Girl from "@/components/page/hero/girl"; 
import Popular from"@/components/page/hero/Popular";
import { Textandimage } from "@/components/text";


import { Contact } from "@/components/page/hero/contact";
import { BeforeAfterImage , StackedProfile ,  } from "@/components/girl"; 
import { TestimonialSection } from "@/components/client";
import { LatestNewsSection } from "@/components/latestnews";
import { Footer } from "@/components/ending";
import { ContactSection } from "@/components/generalmap";


import { MeetDrWeiss } from "@/components/oldman";  
 // ← Add /hero/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Mid />
          <Girl />
          <Popular/>
          <Contact/>
          <Textandimage />
          <MeetDrWeiss />
          <ContactSection />
          <TestimonialSection />
          <LatestNewsSection />
          <Footer />
        </>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;