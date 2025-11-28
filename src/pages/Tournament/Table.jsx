import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Table() {
  // sample table rows - static mock
  const rows = [
    {team:'FC Bengaluru', pts:12, gp:6, gd:6},
    {team:'Kickstart FC', pts:10, gp:6, gd:3},
  ];
  return (
    <TableContainer component={Paper} sx={{ borderRadius:2 }}>
      <MuiTable>
        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell>GP</TableCell>
            <TableCell>GD</TableCell>
            <TableCell>Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(r=>(
            <TableRow key={r.team}>
              <TableCell>{r.team}</TableCell>
              <TableCell>{r.gp}</TableCell>
              <TableCell>{r.gd}</TableCell>
              <TableCell>{r.pts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
