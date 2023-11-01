import React from "react";
import Card from "react-bootstrap/Card";
import Object from "./FullCard.module.css";

const FullCard = (props) => {
  return (
    // <div className="col-md-3 mb-4">
      <Card
        className={Object.card}
        style={{ backgroundColor: props.backColor}}
      >
        <Card.Body>
          <div className={Object.circle}>
            <span className={Object.icon}>{props.icon}</span>
          </div>
          <Card.Title className={Object.title}>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    // </div>
  );
};

export default FullCard;
