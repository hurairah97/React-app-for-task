import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Object from "./SidebarWithFormComp.module.css";
import Buttons from "./FormToDo/Buttons";

const SidebarWithFormComp = () => {
    
  return (
    <div className="container">
      <div className="row" style={{ margin: "5rem 0 0rem 0" }}>
        <div className="col-sm-6 p-0">
          <h1 className={Object.Heading}>Cost Calculator Live Demo</h1>
        </div>
        <div className={`col-sm-6 ${Object.btnDiv}`}>
          <Buttons
            variant={"outline-success"}
            text={"BACK-END DEMO"}
            className={Object.btn1}
          />
          &nbsp;&nbsp;
          <Buttons
            variant={"outline-success"}
            text={"Vertical Layout"}
            className={Object.btn1}
          />
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default SidebarWithFormComp;
