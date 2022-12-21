import { Grid, List, Fab, ListItemText } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
function Card2List({ getFormik, removeTableRow }) {
  return (
    <div>
      {getFormik.map((item) => (
        <List key={item.id}>
          <Grid container columns={12}>
            <ListItemText>{item.passOutYear}</ListItemText>
            <ListItemText>{item.Course}</ListItemText>
            <ListItemText>{item.percentage}%</ListItemText>
            <ListItemText
              onClick={() => {
                removeTableRow(item.id);
              }}
            >
              <Fab>
                <ClearIcon
                // sx={{
                //   padding: "5px",
                //   color: "#fe0073",
                //   transition: "0.3s",
                //   borderRadius: "50%",
                //   "&:hover": {
                //     padding: "5px",
                //     borderRadius: "50%",
                //     color: "#f2f2f2",
                //     backgroundColor: "#471597",
                //   },
                // }}
                />
              </Fab>
            </ListItemText>
          </Grid>
        </List>
      ))}
    </div>
  );
}

export default Card2List;
