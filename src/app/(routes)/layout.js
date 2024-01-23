import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import Providers from "@/contexts/Providers";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Providers>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </Providers>
  );
};

export default Layout;
