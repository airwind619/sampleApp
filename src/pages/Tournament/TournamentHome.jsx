import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import Fixtures from "./Fixtures";
import Table from "./Table";
import PlayerStats from "./PlayerStats";
import TeamStats from "./TeamStats";
import History from "./History";

export default function TournamentHome() {
  const [tab, setTab] = useState(0);
  return (
    <Box p={2} pb={12}>
      <Tabs value={tab} onChange={(e,v)=>setTab(v)} variant="scrollable">
        <Tab label="Fixtures" />
        <Tab label="Table" />
        <Tab label="Player Stats" />
        <Tab label="Team Stats" />
        <Tab label="History" />
      </Tabs>

      <Box mt={2}>
        {tab===0 && <Fixtures />}
        {tab===1 && <Table />}
        {tab===2 && <PlayerStats />}
        {tab===3 && <TeamStats />}
        {tab===4 && <History />}
      </Box>
    </Box>
  );
}
