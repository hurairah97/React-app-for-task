import React, { useReducer } from "react";
import Object from "./Sidebar.module.css";
import FormToDo from "../FormToDo/FormToDo";

const Sidebar = () => {
  const reducer = (state, action) => {
    switch (action) {
      case "printing":
        return {
          form: <FormToDo text={"Printing"} backColor={"#00B163"} />,
          activeTab: "Printing",
        };
      case "designing":
        return {
          form: <FormToDo text={"Designing"} backColor={"#385BCE"} />,
          activeTab: "Designing",
        };
      case "rental":
        return {
          form: <FormToDo text={"Rental"} backColor={"#F3454D"} />,
          activeTab: "Rental",
        };
      case "loan":
        return {
          form: <FormToDo text={"Loan"} backColor={"#273044"} />,
          activeTab: "Loan",
        };
      case "wash":
        return {
          form: <FormToDo text={"Wash"} backColor={"#FF4504"} />,
          activeTab: "Wash",
        };
      case "salon":
        return {
          form: <FormToDo text={"Salon"} backColor={"#FFC000"} />,
          activeTab: "Salon",
        };
      default:
        throw new Error("Unexpected Component Action");
    }
  };

  const [state, dispatch] = useReducer(
    reducer,
    {
      form: <FormToDo text={"Printing"} backColor={"#00B163"} />,
      activeTab: "Printing",
    }
  );
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div style={{ display: "block", margin: "5rem 0 2rem 0" }}>
          <div className={`tabs ${Object.tab}`}>
            <li
              onClick={() => dispatch("printing")}
              style={{backgroundColor: state.activeTab === "Printing" ? "#00B163" : "transparent",}}
            >
              Printing Services
            </li>
            <li 
              onClick={() => dispatch("designing")}
              style={{backgroundColor: state.activeTab === "Designing" ? "#385BCE" : "transparent",}}
             >
              Designing Services</li>
              <li 
              onClick={() => dispatch("rental")}
              style={{backgroundColor: state.activeTab === "Rental" ? "#F3454D" : "transparent",}}
             >
              Rental</li>
              <li 
              onClick={() => dispatch("loan")}
              style={{backgroundColor: state.activeTab === "Loan" ? "#273044" : "transparent", color:state.activeTab === "Loan" ? "white" : "black"}}
             >
              Loan </li>
              <li 
              onClick={() => dispatch("wash")}
              style={{backgroundColor: state.activeTab === "Wash" ? "#FF4504" : "transparent",}}
             >
              Wash</li>
              <li 
              onClick={() => dispatch("salon")}
              style={{backgroundColor: state.activeTab === "Salon" ? "#FFC000" : "transparent",}}
             >
              Salon</li>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-8 col-sm-12">{state.form}</div>
    </div>
  );
};

export default Sidebar;


