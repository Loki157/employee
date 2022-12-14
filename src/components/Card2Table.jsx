import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Card2Table({ getFormik }) {
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
                  <Fab size="small" onClick={() => {}}>
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
