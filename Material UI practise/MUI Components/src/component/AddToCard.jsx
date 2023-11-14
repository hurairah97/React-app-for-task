import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/slice/slice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const AddToCard = () => {
  const items = useSelector(getItemsSelector);

  const total = items.reduce((a, b) => a + Number(b.price), 0);

  return (
    <Typography component="div" sx={{ margin: "2rem 0 2rem 0", display: "flex", flexDirection: "row" }}>
      <Box
        sx={{ flexGrow: 2, textAlign: "right" }}
        whiteSpace={3}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={items.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Box>

      <Box sx={{ padding: "8px 0 8px 8px", textAlign: "right" }}>Total: {total}</Box>
    </Typography>
  );
};
  
export default AddToCard;
