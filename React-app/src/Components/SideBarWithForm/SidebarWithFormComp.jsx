import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import FormToDo from "./FormToDo/FormToDo";
import Object from './SidebarWithFormComp.module.css';
import Button from 'react-bootstrap/Button';

const SidebarWithFormComp = () => {
  return (
    <div className="container">
        <div className="row">
        <h1 className={`col-sm-6 ${Object.Heading}`}>Cost Calculator Live Demo</h1>
        <div className="col-sm-6">
        <Button variant="outline-success" className={Object.btn1}>BACK-END DEMO</Button>{' '}
        <Button variant="outline-success" className={Object.btn2}>Vertical Layout</Button>{' '}
        </div>
        </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <FormToDo />
        </div>
      </div>
    </div>
  );
};

export default SidebarWithFormComp;
