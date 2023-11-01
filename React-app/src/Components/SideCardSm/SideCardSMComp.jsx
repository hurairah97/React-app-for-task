import React from "react";
import Object from "./SideCardSMComp.module.css";
import SideCardSm from "./SCardSm/SideCardSm";
import { PiChartPieSliceLight } from "react-icons/pi";
import { AiOutlineCalculator } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { BsArrowUpLeftSquare } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <AiOutlineCalculator />,
    color: "#385BCE",
    title: "Calculation Builder",
    desc: "Plugin has its own powerful drag and drop calculation builder",
  },
  {
    id: 2,
    icon: <MdOutlineDashboardCustomize />,
    color: "#FF4504",
    title: "Customization",
    desc: "Allows to freely customize colors, fonts, and background color",
  },
  {
    id: 3,
    icon: <GoGitCompare />,
    color: "#273044",
    title: "Compatibility",
    desc: "Works perfectly with the popular page builders",
  },
  {
    id: 4,
    icon: <LiaCommentDollarSolid />,
    color: "#FF4504",
    title: "Instant Estimation",
    desc: "Lets users immediately estimate projects cost",
  },
  {
    id: 5,
    icon: <BsArrowUpLeftSquare />,
    color: "#00B163",
    title: "Intuitive Interface",
    desc: "Simple and user-friendly interface with no need for programming skills",
  },
  {
    id: 6,
    icon: <GoGitCompare />,
    color: "#00B163",
    title: "ReCAPTCHA",
    desc: "Works perfectly with the popular page builders",
  },
  {
    id: 7,
    icon: <GoGitCompare />,
    color: "#00B163",
    title: "ReCAPTCHA",
    desc: "Works perfectly with the popular page builders",
  },
  {
    id: 8,
    icon: <LiaCommentDollarSolid />,
    color: "#385BCE",
    title: "Contact Form 7",
    desc: "Lets users immediately estimate projects cost",
  },
  {
    id: 9,
    icon: <BsArrowUpLeftSquare />,
    color: "#273044",
    title: "Date & Time Picker",
    desc: "Simple and user-friendly interface with no need for programming skills",
  },
];
const SideCardSMComp = () => {
  return (
    <div className="container">
      <h1 className={Object.Heading}>WordPress Cost Calculator Features</h1>
      <div className="row">
        {data.map((item) => (
          <SideCardSm
            key={item.id}
            backColor={item.color}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SideCardSMComp;
