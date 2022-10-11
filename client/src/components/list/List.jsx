import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: "INTE 1111",
      year: "2",
      semester: "2",
      name: "Integrative Programming",
      grade: "A",
    },
    {
      id: "INTE 2222",
      year: "2",
      semester: "2",
      name: "Software Engineering Concepts",
      grade: "A",
    },
    {
      id: "INTE 3333",
      year: "2",
      semester: "2",
      name: "Project Management",
      grade: "A",
    },
    {
      id: "INTE 4444",
      year: "2",
      semester: "2",
      name: "Artificial Intelligence",
      grade: "A",
    },
    {
      id: "INTE 5555",
      year: "2",
      semester: "2",
      name: "Advanced Web Applications",
      grade: "A",
    },
  ];
  return (
    <div className="list">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="tableHead">
            <TableRow className="tableHeadRow">
              <TableCell className="tableCell">Course Code</TableCell>
              <TableCell className="tableCell">Year</TableCell>
              <TableCell className="tableCell">Semester</TableCell>
              <TableCell className="tableCell">Course</TableCell>
              <TableCell className="tableCell">Grade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {rows.map((row) => (
              <TableRow key={row.id} className="tableRow">
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.year}</TableCell>
                <TableCell className="tableCell">{row.semester}</TableCell>
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">{row.grade}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
