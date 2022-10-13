import React from "react";
import SideNav from "../../components/sidenav/SideNav";
import "./enroll.scss";
import TopNav from "../../components/topnav/TopNav";
import List from "../../components/list/List";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Enroll = () => {
  //dummy data
  const rows = [
    {
      id: "INTE 78465",
      department: "Industrial Management",
      name: "Course 1 with no rest",
      credits: 3,
      by: "Prof. Rick Sanchez",
    },
    {
      id: "INTE 78465",
      department: "Industrial Management",
      name: "Course 2 with no rest",
      credits: 3,
      by: "Prof. Rick Sanchez",
    },
    {
      id: "INTE 78465",
      department: "Industrial Management",
      name: "Course 3 with no rest",
      credits: 3,
      by: "Prof. Rick Sanchez",
    },
    {
      id: "INTE 78465",
      department: "Industrial Management",
      name: "Course 3 with no rest",
      credits: 3,
      by: "Prof. Rick Sanchez",
    },
    {
      id: "INTE 78465",
      department: "Industrial Management",
      name: "Course 4 with no rest",
      credits: 3,
      by: "Dr. Rick Sanchez",
    },
    {
      id: "INTE 78465",
      department: "Industrial Management",
      name: "Course 5 with no rest",
      credits: 3,
      by: "Dr. Rick Sanchez",
    },
  ];

  return (
    <div className="enroll">
      <SideNav />
      <div className="enrollContainer">
        <TopNav />
        <div className="title">New Courses</div>
        <div className="table">
          <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="tableHead">
                <TableRow className="tableHeadRow">
                  <TableCell className="tableCell">Course Code</TableCell>
                  <TableCell className="tableCell">Department</TableCell>
                  <TableCell className="tableCell">Course</TableCell>
                  <TableCell className="tableCell">Credits</TableCell>
                  <TableCell className="tableCell">By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="tableBody">
                {rows.map((row) => (
                  <TableRow key={row.id} className="tableRow">
                    <Link to={"/course/enroll:courseId"}>
                      <TableCell className="tableCell">{row.id}</TableCell>
                      <TableCell className="tableCell">
                        {row.department}
                      </TableCell>
                      <TableCell className="tableCell">{row.name}</TableCell>
                      <TableCell className="tableCell">{row.credits}</TableCell>
                      <TableCell className="tableCell">{row.by}</TableCell>
                      <TableCell className="tableCell">
                        <span className={`status ${row.status}`}>
                          {row.status}
                        </span>
                      </TableCell>
                    </Link>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
