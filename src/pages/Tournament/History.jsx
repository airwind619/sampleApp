import { Card, CardContent, Typography, Box } from "@mui/material";

export default function History() {
  const winners = [
    {season:'2024', winner:'FC Bengaluru'},
    {season:'2023', winner:'Kickstart FC'},
  ];
  return (
    <Box>
      {winners.map(w=>(
        <Card key={w.season} sx={{ mb:2, borderRadius:2 }}>
          <CardContent>
            <Typography>{w.season} • {w.winner}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
