import "./Style.scss";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Media from "./component/Media";

function App() {
  return (
    <BrowserRouter>
      <Link to="movies">Movies</Link>
      <Link to="music">Music</Link>
      <Link to="apps">Apps</Link>
      <Link to="software">Software</Link>

      <Routes>
        <Route path="/movies" element={<media d={0} />} />
        <Route path="/music" element={<media d={1} />} />
        <Route path="/apps" element={<media d={2} />} />
        <Route path="/software" element={<media d={3} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
