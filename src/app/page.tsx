import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Nav from "./components/Nav";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import RecentProjects from "./components/RecentProject";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Services />
      <RecentProjects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
