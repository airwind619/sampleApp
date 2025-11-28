import { Card, CardContent, Typography, Box } from "@mui/material";

export default function TeamStats() {
  const teams = [
    {team:'FC Bengaluru', goalsFor:12, goalsAgainst:6},
    {team:'Kickstart FC', goalsFor:10, goalsAgainst:7},
  ];
  return (
    <Box>
      {teams.map(t=>(
        <Card key={t.team} sx={{ mb:2, borderRadius:2 }}>
          <CardContent>
            <Typography variant="h6">{t.team}</Typography>
            <Typography color="text.secondary">GF: {t.goalsFor} • GA: {t.goalsAgainst}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
