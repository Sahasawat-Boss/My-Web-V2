import Hero from "./components/Hero";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FeatureProject from "./components/FeatureProject";
import ShowcaseProject from "./components/Showcase/ShowcaseProject";
//import SelectCat from "./components/SelectCat";       <SelectCat/>

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">

      <Hero />
      <Services />

      <ShowcaseProject />
      <FeatureProject />

      <Experience />
      <Stack />

      <Contact />
    </div>
  );
}
