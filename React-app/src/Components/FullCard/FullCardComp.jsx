import React from "react";
import Object from "./FullCardComp.module.css";
import FullCard from "./FCard/FullCard";
import { AiOutlineCalculator, AiOutlineDollarCircle } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const FullCardComp = () => {
  return (
    <div className="container">
      <h1 className={Object.Heading}>
        With Wordpress Cost Calculator
        <br />
        Plugin <span style={{ color: "#00B163" }}>You Can:</span>
      </h1>
        <div className="row" style={{marginTop:'4rem', display:'flex', justifyContent:'space-between'}}>
          <FullCard
            icon={<AiOutlineCalculator />}
            backColor={"#00B163"}
            title={"cost calculation forms"}
            desc={"Create price and cost estimations on your WordPress website to provide cost information"}
          />
          <FullCard
            icon={<IoBarChartOutline />}
            backColor={"#385BCE"}
            title={"Generate leads"}
            desc={"Convert your potential customers into real sales with our simple to use cost calculator"}
          />
          <FullCard
            icon={<AiOutlineDollarCircle />}
            backColor={"#F3454D"}
            title={"Make pricing transparent"}
            desc={"Customers easily understand your pricing and costing calculator"}
          />
          <FullCard
            icon={<HiOutlineComputerDesktop />}
            backColor={"#273044"}
            title={"Compatible with all Page builders"}
            desc={"Use calculator as a shortcode on your WordPress website (Elementor, Gutenberg, WPbakery, etc.)"}
          />
        </div>
      </div>
  );
};

export default FullCardComp;
