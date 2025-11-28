import { Card, CardContent, Typography, Grid, Avatar } from "@mui/material";
import data from '../../mockData.json';

export default function MatchLineup() {
  const players = data.club.players;
  return (
    <Card sx={{ borderRadius:2 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">Lineup</Typography>
        <Grid container spacing={2} mt={1}>
          {players.map((p,idx)=>(
            <Grid item xs={4} key={idx}>
              <Avatar sx={{ width:56, height:56 }}>{p.name[0]}</Avatar>
              <Typography>{p.name}</Typography>
              <Typography variant="caption" color="text.secondary">{p.pos}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
