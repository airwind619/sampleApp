import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <BottomNav />
    </BrowserRouter>
  );
}
