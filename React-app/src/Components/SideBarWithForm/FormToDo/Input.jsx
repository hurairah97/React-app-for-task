import React from "react";
import Form from "react-bootstrap/Form";

export const Input = (props) => {
  // console.log(props);
  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.title}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeHolders}
        ref={props.name}
      />
    </Form.Group>
  );
};
export default Input;
