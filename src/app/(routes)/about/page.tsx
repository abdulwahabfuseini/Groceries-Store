import Background from "@/components/aboutUs/Background";
import Services from "@/components/aboutUs/Services";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto py-20 px-4">
        <Background />
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default About;
