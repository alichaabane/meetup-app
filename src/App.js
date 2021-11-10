import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  // update:  react-router-dom v6

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      </Layout>
  );
}

export default App;
