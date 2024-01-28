import Address from "@/components/contact/Address";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

export const metadata = {
  title: "Gloceries App | Contact Us",
  description: "Need Help? Contact Us",
};

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-5xl mx-auto py-12 sm:py-20 px-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="w-full sm:col-span-1 lg:col-span-3">
          <Address />
        </div>
        <div className="w-full sm:col-span-1 lg:col-span-2">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
