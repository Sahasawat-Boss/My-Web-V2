import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Nav from "./components/Nav";
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
      <Nav />
      <Hero />
      <Services />

      <RecentProjects />
      <Port/>

      <Experience/>
      <Stack />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
