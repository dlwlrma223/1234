import Menu from "./Menu";
import HeroList from "./HeroList";
import Match from "./Match";
import UpDate from "./UpDate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/HeroList" element={<HeroList />}>
            <Route path=":id" element={<HeroList />} />
          </Route>
          <Route path="/UpDate" element={<UpDate />} />
          <Route path="/Match" element={<Match />} />
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
