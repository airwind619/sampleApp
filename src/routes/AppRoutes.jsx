import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MyMatches from "../pages/MyMatches";
import MyClub from "../pages/MyClub";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import TournamentHome from "../pages/Tournament/TournamentHome";
import MatchView from "../pages/Match/MatchView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mymatches" element={<MyMatches />} />
      <Route path="/myclub" element={<MyClub />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/tournament/:id" element={<TournamentHome />} />
      <Route path="/match/:id" element={<MatchView />} />
    </Routes>
  );
}
