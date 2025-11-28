import { Box, Typography, Avatar, Stack, Card, CardContent, Button } from "@mui/material";

export default function Profile() {
  return (
    <Box p={2} pb={12}>
      <Box textAlign="center" mb={2}>
        <Avatar sx={{ width:84, height:84, mb:1, mx:'auto' }}>U</Avatar>
        <Typography variant="h6" fontWeight="bold">Aravindhan Srikanthan</Typography>
        <Typography color="text.secondary">Member since 2021</Typography>
      </Box>

      <Stack spacing={2}>
        <Card sx={{ borderRadius:2 }}>
          <CardContent>
            <Typography variant="subtitle1">My Stats</Typography>
            <Typography color="text.secondary">Matches: 24 • Goals: 8 • Assists: 5</Typography>
          </CardContent>
        </Card>

        <Card sx={{ borderRadius:2 }}>
          <CardContent>
            <Button variant="contained">Edit Profile</Button>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
