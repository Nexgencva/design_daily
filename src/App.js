import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Graphicdesign from "./pages/Graphic_design";
import Home from "./pages/Home";
import Websitedesign from "./pages/Website_design";
import Appdesign from "./pages/App_design";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Graphic_design" element={<Graphicdesign />} />
          <Route exact path="/Website_design" element={<Websitedesign />} />
          <Route exact path="/App_design" element={<Appdesign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
