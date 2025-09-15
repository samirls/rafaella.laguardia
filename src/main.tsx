import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VacinaBronquiolite from "./links/VacinaBronquiolite.tsx";
import ComoUtilizarIbuprofeno from "./links/ComoUtilizarIbuprofeno.tsx";
import DipironaDosagem from "./links/DipironaDosagem.tsx"
import ScrollToTop from "./components/ScrollToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/vacina-bronquiolite" element={<VacinaBronquiolite />} />
          <Route path="/como-utilizar-o-ibuprofeno" element={<ComoUtilizarIbuprofeno />} />
          <Route path="/dipirona-dosagem" element={<DipironaDosagem />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
