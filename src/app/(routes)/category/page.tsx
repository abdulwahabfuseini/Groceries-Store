
import Services from "@/components/overview/Services";
import Navbar from "@/components/header/Navbar";
import React from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/overview/Hero";
import Categories from "@/components/overview/Categories";
import Banner from "@/components/overview/Banner";
import Discount from "@/components/overview/Discount";
import SellingProducts from "@/components/overview/SellingProducts";


export const metadata = {
  title: "Groceries Store | Fresh and Organic Gloceries",
  description: "Buy Fresh and Organic Gloceries from us",
};

const Category = () => {

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

export default Category;
