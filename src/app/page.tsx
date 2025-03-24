//import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Hero />
      <Footer/>
    </div>
  );
}
