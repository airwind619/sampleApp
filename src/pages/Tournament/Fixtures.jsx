import { Card, CardContent, Typography, Box } from "@mui/material";
import data from "../../mockData.json";

export default function Fixtures() {
  return (
    <Box>
      {data.matches.map(m=>(
        <Card key={m.id} sx={{ mb:2, borderRadius:2 }}>
          <CardContent>
            <Typography variant="subtitle2" color="text.secondary">Match</Typography>
            <Typography variant="h6">{m.home} vs {m.away}</Typography>
            <Typography color="primary">{m.time}</Typography>
            <Typography color="text.secondary">{m.status.toUpperCase()}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
