import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero />
      <Services/>
      <Footer/>
    </div>
  );
}
