import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/slice";

const Cards = ({ data }) => {
  const dispatch = useDispatch();
  // console.log("djadsjj");
  // console.log("ssa", props);
  // console.log(props.img);
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.img}
            alt={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2">Rs: {data.price}</Typography>
            <Typography>
              <Button
                variant="outlined"
                onClick={(e) =>
                  dispatch(addItem({
                    name: data.title,
                    price: data.price,
                    image: data.img,
                  }))
                }
              >
                Add
              </Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Cards;
