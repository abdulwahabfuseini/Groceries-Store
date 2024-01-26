
import Background from "@/components/aboutUs/Background";
import Services from "@/components/overview/Services";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto py-14 lg:py-20 px-3">
        <Background />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default About;
