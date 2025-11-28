import { Card, CardContent, Typography } from "@mui/material";

export default function MatchFacts() {
  return (
    <Card sx={{ borderRadius:2 }}>
      <CardContent>
        <Typography>Facts</Typography>
        <Typography variant="caption" color="text.secondary">No red cards in last 5 matches between these teams.</Typography>
      </CardContent>
    </Card>
  );
}
