import React from "react";
import Button from "react-bootstrap/Button";;

const Buttons = (props) => {
//   const [variant, type, text] = props;

  return (
    <Button variant={props.variant} type={props.type} className={props.className}>
      {props.text}
    </Button>
  );
};

export default Buttons;
