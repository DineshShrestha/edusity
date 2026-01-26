import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Programs from "../../components/Programs/Programs";
import Title from "../../components/Title/Title";
import About from "../../components/About/About";
import Campus from "../../components/Campus/Campus";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subtitle="Programs" title="What we offer" />
        <Programs />

        <About setPlayState={setPlayState} />

        <Title subtitle="Gallery" title="Campus photos" />
        <Campus />

        <Title subtitle="Testimonials" title="What students say" />
        <Testimonials />

        <Title subtitle="Contact" title="Get in touch" />
        <Contact />

        <Footer />

        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </div>
  );
};

export default Home;
