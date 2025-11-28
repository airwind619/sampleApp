import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function MatchCommentary() {
  const comments = [
    {time:"12'", text:'Goal by Arjun'},
    {time:"45+'", text:'Half-time whistle'}
  ];
  return (
    <Card sx={{ borderRadius:2 }}>
      <CardContent>
        <List>
          {comments.map((c,idx)=>(
            <ListItem key={idx}>
              <ListItemText primary={c.text} secondary={c.time} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
