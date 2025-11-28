import { Card, CardContent, Typography, Box } from "@mui/material";

export default function PlayerStats() {
  const players = [
    {name:'Arjun', goals:6, assists:2},
    {name:'Rahul', goals:3, assists:4}
  ];
  return (
    <Box>
      {players.map(p=>(
        <Card key={p.name} sx={{ mb:2, borderRadius:2 }}>
          <CardContent>
            <Typography variant="h6">{p.name}</Typography>
            <Typography color="text.secondary">Goals: {p.goals} • Assists: {p.assists}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
