import React from "react";
import Object from "./SideCardLgComp.module.css";
import SideCardLg from "./ScardLg/SideCardLg";
import { FaRegHandshake, FaRegBuilding } from "react-icons/fa6";
import { AiOutlineCar, AiOutlineHome } from "react-icons/ai";
import { PiTruckBold } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";

const data = [
  {
    id: 1,
    color:"#385BCE",
    title:"Business with a pricing structure",
    desc:"Make it easier for users to quote your services and calculate future costs.",
    icon: <FaRegHandshake />,
  },
  {
    id: 2,
    color:"#FFC000",
    title:"Booking websites",
    desc:"Estimate not only prices but calculate all reservation details to get more information.",
    icon: <FaRegBuilding />,
  },
  {
    id: 3,
    color:"#00B163",
    title:"Car rentals",
    desc:"Allow customers to estimate the exact cost of their planned renting using flexible forms.",
    icon: <AiOutlineCar />,
  },
  {
    id: 4,
    color:"#00B163",
    title:"Car rentals",
    desc:"Allow customers to estimate the exact cost of their planned renting using flexible forms.",
    icon: <AiOutlineHome />,
  },
  {
    id: 5,
    color:"#273044",
    title:"Delivery Services",
    desc:"Customize your form and let users count total costs with the delivery included.",
    icon: <PiTruckBold />,
  },
  {
    id: 6,
    color:"#385BCE",
    title:"Freelancers",
    desc:"A perfect way to calculate your freelance rate based on your personal charging system.",
    icon: <BsPersonWorkspace />,
  },
];
const SideCardLgComp = () => {
  return (
    <div className={Object.Main}>
      <h1 className={Object.Heading}>
        Our WordPress{" "}
        <span style={{ color: "#00B163", fontWeight: "bold" }}>
          Cost Calculator{" "}
        </span>
        is an extension
        <br /> anyone can incorporate into their WordPress
        <br/> website
      </h1>
      <div className="row">
      {data.map((item) => (
          <SideCardLg
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

export default SideCardLgComp;
