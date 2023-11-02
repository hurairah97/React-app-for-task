import React from "react";
import Card from "react-bootstrap/Card";
import Object from "./SideCardSm.module.css";

const SideCardSm = (props) => {
  return (
    <Card className={Object.Card}>
      <div className="row">
        <div
          className={`col-md-2.5 ${Object.circle}`}
          style={{ backgroundColor: props.backColor }}
        >
          <span className={Object.icon}>{props.icon}</span>
        </div>
        <div className="col-md-9 pr-0">
          <Card.Body className="p-0">
            <Card.Title className={Object.title}>{props.title}</Card.Title>
            <Card.Text className={Object.text}>{props.desc}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default SideCardSm;
