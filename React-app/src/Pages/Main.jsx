import React from "react";
import MyNavbar from "../Components/ChildComponent/Navbar/MyNavbar";
import FullCardComp from "../Components/FullCard/FullCardComp";
import Footer from "../Components/ChildComponent/Footer/Footer";
import SideCardLgComp from "../Components/SideCardLg/SideCardLgComp";
import SideCardSMComp from "../Components/SideCardSm/SideCardSMComp";
import SidebarWithFormComp from "../Components/SideBarWithForm/SidebarWithFormComp";

const Main = () => {
  return (
    <>
      <MyNavbar />
      <FullCardComp />
      <SideCardLgComp />
      <SideCardSMComp/>
      <SidebarWithFormComp/>
      <Footer />
    </>
  );
};

export default Main;
