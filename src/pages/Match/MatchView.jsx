import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import MatchPreview from "./MatchPreview";
import MatchLineup from "./MatchLineup";
import MatchStats from "./MatchStats";
import MatchCommentary from "./MatchCommentary";
import MatchFacts from "./MatchFacts";

export default function MatchView() {
  const [tab, setTab] = useState(0);
  return (
    <Box p={2} pb={12}>
      <Tabs value={tab} onChange={(e,v)=>setTab(v)} variant="scrollable">
        <Tab label="Preview" />
        <Tab label="Lineup" />
        <Tab label="Stats" />
        <Tab label="Commentary" />
        <Tab label="Facts" />
      </Tabs>

      <Box mt={2}>
        {tab===0 && <MatchPreview />}
        {tab===1 && <MatchLineup />}
        {tab===2 && <MatchStats />}
        {tab===3 && <MatchCommentary />}
        {tab===4 && <MatchFacts />}
      </Box>
    </Box>
  );
}
