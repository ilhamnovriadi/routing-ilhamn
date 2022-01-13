import "./App.scss";
import Home from "./comps/Home";
import Materis from "./comps/Materis";
import Materi from "./comps/Materi";
import Kontak from "./comps/Kontak";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Header } from "./comps/Header";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      <Header path={pathname} navigate={navigate} />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/materi" element={<Materis />} />
          <Route path="/materi/:id" element={<Materi />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Halaman Tidak Ditemukan</p>
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
