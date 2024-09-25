import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const clienteQuery = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={clienteQuery}>
    <App />
  </QueryClientProvider>
);