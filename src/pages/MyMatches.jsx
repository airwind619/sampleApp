import { Tabs, Tab, Box, Card, CardContent, Typography, Stack, Avatar } from "@mui/material";
import { useState } from "react";
import data from "../mockData.json";

function MatchCard({m}) {
  return (
    <Card sx={{ mb:2, borderRadius:2 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack spacing={0.5}>
            <Typography variant="subtitle2">{m.home}</Typography>
            <Typography variant="caption" color="text.secondary">{m.status.toUpperCase()}</Typography>
          </Stack>
          <Box sx={{ flex:1, textAlign:'center' }}>
            <Typography variant="h6">{m.score ? m.score : 'vs'}</Typography>
            <Typography variant="caption" color="text.secondary">{m.time}</Typography>
          </Box>
          <Stack spacing={0.5} alignItems="flex-end">
            <Typography variant="subtitle2">{m.away}</Typography>
            <Typography variant="caption" color="text.secondary">Venue: Ashok Nagar</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function MyMatches() {
  const [tab, setTab] = useState(2);

  const past = data.matches.filter(m=>m.status==='past');
  const live = data.matches.filter(m=>m.status==='live');
  const upcoming = data.matches.filter(m=>m.status==='upcoming');

  const list = tab===0?past:tab===1?live:upcoming;

  return (
    <Box p={2} pb={12}>
      <Tabs value={tab} onChange={(e,v)=>setTab(v)} centered>
        <Tab label="Past" />
        <Tab label="Live" />
        <Tab label="Upcoming" />
      </Tabs>

      <Box mt={2}>
        {list.length===0 ? <Typography color="text.secondary">No matches</Typography> : (
          <Stack>
            {list.map(m=> <MatchCard key={m.id} m={m} />)}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
