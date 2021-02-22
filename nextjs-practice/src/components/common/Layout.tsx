import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="bg-gray-200 font-sans font-thin px-6 bg-fixed bg-cover bg-no-repeat">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
