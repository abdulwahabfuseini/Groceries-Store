import Services from "@/components/homeContent/Services";
import Navbar from "@/components/header/Navbar";
import React from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/homeContent/Hero";
import Categories from "@/components/homeContent/Categories";
import Banner from "@/components/homeContent/Banner";
import Discount from "@/components/homeContent/Discount";
import SellingProducts from "@/components/homeContent/SellingProducts";

export const metadata = {
  title: "Groceries Store | Fresh and Organic Gloceries",
  description: "Buy Fresh and Organic Gloceries from us",
};

const Overview = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full px-2 mx-auto max-w-7xl sm:px-5">
        <Services />
        <Categories />
      </div>
      <Banner />
      <SellingProducts />
      <Discount />
      <Footer />
    </>
  );
};

export default Overview;
