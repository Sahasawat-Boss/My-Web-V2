import Hero from "./components/Hero";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import RecentProjects from "./components/RecentProject";
import Port from "./components/Port";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";
//import SelectCat from "./components/SelectCat";       <SelectCat/>

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">

      <Hero />
      <Services />

      <RecentProjects />
      <Port/>

      <Experience/>
      <Stack />
      
      <Contact />
      <ScrollToTop />

    </div>
  );
}
