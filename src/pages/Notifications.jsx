import { Box, Typography, Card, CardContent } from "@mui/material";

export default function Notifications() {
  return (
    <Box p={2} pb={12}>
      <Typography variant="h6" mb={1}>Notifications</Typography>
      <Card sx={{ borderRadius:2 }}>
        <CardContent>
          <Typography>Referee assigned for your upcoming match</Typography>
          <Typography variant="caption" color="text.secondary">2 hours ago</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
