import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Rosary from "./pages/Rosary";

function App() {
  // En desarrollo usa "/", en producción usa el PUBLIC_URL de GitHub Pages
  const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
  
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Rosary />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" theme="dark" />
    </div>
  );
}

export default App;
