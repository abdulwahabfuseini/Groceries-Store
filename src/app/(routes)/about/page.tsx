import Background from "@/components/aboutUs/Background";
import Services from "@/components/overview/Services";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import Testimonial from "@/components/aboutUs/Testimonial";

export const metadata = {
  title: "Groceries Store | About Us",
  description: "Why Choose Us",
};

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto py-14 lg:py-20 px-3 sm:px-6">
        <Background />
        <Services />
        <Testimonial />
      </div>
      <Footer />
    </>
  );
};

export default About;
