import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Fab,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Card2Table({ getFormik, removeTableRow }) {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Passed Out Year</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getFormik.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.passOutYear}</TableCell>
                <TableCell>{item.Course} </TableCell>
                <TableCell>{item.percentage}%</TableCell>
                <TableCell>
                  <Fab
                    sx={{
                      backgroundColor: "#6727cc",
                      color: "#f2f2f2",
                      "&:hover": { backgroundColor: "#471597" },
                      //textAlign: "center",
                    }}
                    size="small"
                    onClick={() => {
                      removeTableRow(item.id);
                    }}
                  >
                    <DeleteIcon />
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Card2Table;
