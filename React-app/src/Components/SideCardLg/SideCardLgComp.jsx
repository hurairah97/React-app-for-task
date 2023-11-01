import React from "react";
import Object from "./SideCardLgComp.module.css";
import SideCardLg from "./ScardLg/SideCardLg";


const SideCardLgComp = () => {
  return (
    <div className={Object.Main}>
      <h1 className={Object.Heading}>
        Our WordPress Plugin{" "}
        <span style={{ color: "#00B163", fontWeight:"bold" }}>Cost Calculator </span>
        is an extension
        <br /> anyone can incorporate into their WordPress website
      </h1>
      <div className="row">
      <SideCardLg/>
      <SideCardLg/>
      <SideCardLg/>
      <SideCardLg/>
      </div>
      </div>
  );
};

export default SideCardLgComp;
