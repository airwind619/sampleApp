import { Box, Typography, Stack, Card, CardContent, CardMedia, Chip, Divider, IconButton } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import data from "../mockData.json";

export default function Home() {
  return (
    <Box p={2} pb={12}>
      <Typography variant="h5" fontWeight="bold" mb={1}>Discover</Typography>
      <Typography color="text.secondary" mb={2}>Local football news & upcoming matches</Typography>

      <Stack spacing={2}>
        {data.tournaments.map((t) => (
          <Card key={t.id} sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">Tournament</Typography>
              <Typography variant="h6" fontWeight="bold">{t.name} • {t.season}</Typography>
              <Divider sx={{ my:1 }} />
              <Stack direction="row" alignItems="center" spacing={2}>
                <Chip icon={<CalendarMonthIcon />} label={t.nextMatch.time} />
                <Typography color="text.secondary">{t.nextMatch.home} vs {t.nextMatch.away}</Typography>
                <Box sx={{ flex:1 }} />
                <IconButton size="small" aria-label="follow">Follow</IconButton>
              </Stack>
            </CardContent>
          </Card>
        ))}

        <Card sx={{ borderRadius:2 }}>
          <CardMedia component="img" height="140" image="https://source.unsplash.com/featured/?football" alt="football" />
          <CardContent>
            <Typography variant="h6">Grassroots U16 tournament announced</Typography>
            <Typography color="text.secondary">12 teams from Indiranagar & Koramangala will participate.</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
