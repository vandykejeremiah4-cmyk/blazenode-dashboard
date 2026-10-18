import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import About from "./pages/About";
import OfficialServers from "./pages/OfficialServers";
import Events from "./pages/Events";
import ServerTakeover from "./pages/ServerTakeover";
import Creators from "./pages/Creators";
import Partners from "./pages/Partners";
import Announcements from "./pages/Announcements";
import BNSSignal from "./pages/BNSSignal";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/official-servers" element={<OfficialServers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/server-takeover" element={<ServerTakeover />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/bns-signal" element={<BNSSignal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
