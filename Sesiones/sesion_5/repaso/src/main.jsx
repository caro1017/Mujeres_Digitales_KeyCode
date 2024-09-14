import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Tarjeta } from "./components/tarjeta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tarjeta nombre="Carolina" apellido="Uribe" edad={34} genero={false} />
    <App />
  </StrictMode>
);
