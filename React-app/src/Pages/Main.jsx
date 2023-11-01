import React from "react";
import MyNavbar from "../Components/ChildComponent/Navbar/MyNavbar";
import FullCardComp from "../Components/FullCard/FullCardComp";
import Footer from "../Components/ChildComponent/Footer/Footer";
import SideCardLgComp from "../Components/SideCardLg/SideCardLgComp";

const Main = () => {
  return (
    <>
      <MyNavbar />
      <FullCardComp />
      <SideCardLgComp />
      <Footer />
    </>
  );
};

export default Main;
