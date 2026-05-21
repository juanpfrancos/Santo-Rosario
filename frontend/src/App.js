import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Rosary from "./pages/Rosary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rosary />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-center" theme="dark" />
    </div>
  );
}

export default App;
