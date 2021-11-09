import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import Meetups from "./pages/Meetups";
function App() {
  // upgrade to react-router-dom v6

  return (
    <span>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />}></Route>
        <Route path="/meetups" element={<Meetups />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      </span>
  );
}

export default App;
