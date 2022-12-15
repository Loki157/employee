import { Grid, List, ListItemText } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
function Card2List({ getFormik, removeTableRow }) {
  return (
    <div>
      {getFormik.map((item, index) => (
        <List key={index}>
          <Grid container columns={12}>
            <ListItemText
              sx={{
                padding: "5px",
              }}
            >
              {item.passOutYear}
            </ListItemText>
            <ListItemText
              sx={{
                padding: "5px",
              }}
            >
              {item.Course}
            </ListItemText>
            <ListItemText
              sx={{
                padding: "5px",
              }}
            >
              {item.percentage}%
            </ListItemText>
            <ListItemText>
              <ClearIcon
                sx={{
                  padding: "5px",
                  color: "#fe0073",
                  transition: "0.3s",
                  borderRadius: "50%",
                  "&:hover": {
                    padding: "5px",
                    borderRadius: "50%",
                    color: "#f2f2f2",
                    backgroundColor: "#471597",
                  },
                }}
                onclick={removeTableRow}
              />
            </ListItemText>
          </Grid>
        </List>
      ))}
    </div>
  );
}

export default Card2List;
