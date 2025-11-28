import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function MatchStats() {
  const stats = [
    {label:'Shots', a:8, b:5},
    {label:'Possession', a:'54%', b:'46%'},
    {label:'Fouls', a:10, b:12}
  ];
  return (
    <Grid container spacing={2}>
      {stats.map(s=>(
        <Grid item xs={12} key={s.label}>
          <Card sx={{ borderRadius:2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">{s.label}</Typography>
              <Typography>{s.a} • {s.b}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
