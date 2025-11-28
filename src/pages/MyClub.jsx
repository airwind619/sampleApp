import { Box, Typography, Avatar, Stack, Card, CardContent, Chip } from "@mui/material";
import data from "../mockData.json";

export default function MyClub() {
  const club = data.club;

  return (
    <Box p={2} pb={12}>
      <Box textAlign="center" mb={2}>
        <Avatar sx={{ width:84, height:84, mb:1, mx:'auto' }}>FB</Avatar>
        <Typography variant="h6" fontWeight="bold">{club.name}</Typography>
        <Typography color="text.secondary">Bengaluru</Typography>
      </Box>

      <Card sx={{ borderRadius:2, mb:2 }}>
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">Upcoming Match</Typography>
          <Typography>{data.matches[0].home} vs {data.matches[0].away}</Typography>
          <Chip label={data.matches[0].time} sx={{ mt:1 }} />
        </CardContent>
      </Card>

      <Typography variant="subtitle1" mb={1}>Squad</Typography>
      <Stack spacing={1}>
        {club.players.map((p,idx)=>(
          <Card key={idx} sx={{ borderRadius:2 }}>
            <CardContent style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <Typography>{p.name}</Typography>
                <Typography variant="caption" color="text.secondary">{p.pos} • #{p.number}</Typography>
              </div>
              <Avatar>{p.name[0]}</Avatar>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
