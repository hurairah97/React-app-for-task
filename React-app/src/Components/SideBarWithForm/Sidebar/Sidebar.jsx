import React from "react";
import Object from "./Sidebar.module.css";

const Sidebar = () => {
  const run = () => {
    
  }
  return (
    <div style={{ display: "block", paddingTop:"5rem"}}>
      <div className={`tabs ${Object.tab}`}>
        <li onClick={run}>Printing Services</li>
        <li>Designing Services</li>
        <li>Car Rental</li>
        <li>Loan </li>
        <li>Car Wash</li>
        <li>Beauty Salon</li>
      </div>
    </div>
  );
};

export default Sidebar;
