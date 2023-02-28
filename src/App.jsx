import { BrowserRouter, Routes, Route } from "react-router-dom";

// Paginas
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// Componentes
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/sobremi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
