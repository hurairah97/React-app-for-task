import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Object from "./FormToDo.module.css";
import Input from "./Input";
import Buttons from "./Buttons";

const FormToDo = (props) => {
  const name = useRef();
  const category = useRef();
  const price = useRef();

  const input = [
    {
      value: 1,
      title: props.text + " name",
      type: "text",
      placeHolders: "Enter name",
      id: "name",
    },
    {
      value: 2,
      title: props.text + " category",
      type: "text",
      placeHolders: "Enter Category",
      id: "category",
    },
    {
      value: 3,
      title: props.text + " price",
      type: "number",
      placeHolders: "Enter Price",
      id: "price",
    },
  ];
  const inputData = [];

  const submission = (event) => {

    event.preventDefault();
    const nameInput = name.current.value;
    const categoryInput = category.current.value;
    const priceInput = price.current.value;

    const data = {
      name: nameInput,
      category: categoryInput,
      price: parseInt(priceInput),
    };
    inputData.push(data);
    console.log(inputData);

    name.current.value = "";
    category.current.value = "";
    price.current.value = "";
  };
  return (
    <div
      style={{
        backgroundColor: props.backColor,
        padding: "5rem",
        color: props.text === "Salon" ? "black" : "white",
      }}
    >
      <h1 className={Object.heading}>
        {props.text === "Wash" || props.text === "Rental" ? "Car " + props.text : props.text}
      </h1>
      <Form onSubmit={submission}>
        {input.map((item) => (
          <Input
            key={item.value}
            title={item.title}
            type={item.type}
            placeHolders={item.placeHolders}
            id={item.id}
            name={
              item.id === "name" ? name : item.id === "category" ? category: price
            }
          />
        ))}
        <div className="d-flex justify-content-center">
            <Buttons variant={"info"} type={"submit"} text={"Submit"}/>
        </div>
      </Form>
    </div>
  );
};

export default FormToDo;
