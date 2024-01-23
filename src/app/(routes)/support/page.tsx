import Address from "@/components/contact/Address";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import React from "react";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-7xl mx-auto py-20 px-4">
        <Address />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Support;
