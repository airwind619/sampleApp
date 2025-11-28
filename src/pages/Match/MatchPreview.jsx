import { Card, CardContent, Typography, Stack } from "@mui/material";
import data from '../../mockData.json';

export default function MatchPreview() {
  const m = data.matches[0];
  return (
    <Card sx={{ borderRadius:2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">{m.home} vs {m.away}</Typography>
            <Typography color="text.secondary">{m.time}</Typography>
          </div>
          <div>
            <Typography variant="h6">{m.score ? m.score : '-'}</Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}
