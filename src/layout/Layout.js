import React from "react";
import SubNavigation from "../view/HomePage/component/SubNavigation/SubNavigation";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <SubNavigation />
      {children}
      <Footer />
    </div>
  );
}
