import React from "react";
import Object from "./FullCardComp.module.css";
import FullCard from "./FCard/FullCard";
import { AiOutlineCalculator, AiOutlineDollarCircle } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const data = [
  {
    id: 1,
    title: "cost calculation forms",
    desc: "Create price and cost estimations on your WordPress website to provide cost information",
    color: "#00B163",
    icon: <AiOutlineCalculator />,
  },
  {
    id: 2,
    title: "Generate leads",
    desc: "Convert your potential customers into real sales with our simple to use cost calculator",
    color: "#385BCE",
    icon: <IoBarChartOutline />,
  },
  {
    id: 3,
    title: "Make pricing transparent",
    desc: "Customers easily understand your pricing and costing calculator",
    color: "#F3454D",
    icon: <AiOutlineDollarCircle />,
  },
  {
    id: 4,
    title: "Compatible with all Page builders",
    desc: "Use calculator as a shortcode on your WordPress website (Elementor, Gutenberg, WPbakery, etc.)",
    color: "#273044",
    icon: <HiOutlineComputerDesktop />,
  },
];
const FullCardComp = () => {
  return (
    <div className="container">
      <h1 className={Object.Heading}>
        With Wordpress Cost Calculator
        <br />
        Plugin <span style={{ color: "#00B163" }}>You Can:</span>
      </h1>
      <div
        className="row"
        style={{
          marginTop: "4rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {data.map((item) => (
          <FullCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            backColor={item.color}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FullCardComp;
