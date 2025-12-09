import Hero from "@/component/Hero/Hero";
import Page from "@/component/Page/page";
import Conntact from "@/component/Contact/Contact";
import Footer from "@/component/Footer/Footer";
import Projects from "@/component/Project/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <Page />
      <Projects />
      <Conntact />
      <Footer />
    </>
  );
}
