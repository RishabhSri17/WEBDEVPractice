import "./App.css";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MainHeader from "./Components/MainHeader";
import Support from "./Components/Support";
import About from "./Components/About";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/support">Support</link>
          </li>
          <li>
            <link to="/about">About</link>
          </li>
          <li>
            <link to="/labs">Labs</link>
          </li>
        </ul>
      </nav> */}

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<MainHeader />}>
          {/* this is default route */}
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
