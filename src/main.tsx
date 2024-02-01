import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "@/styles/globals.css";
import FileSystemRoutes from "@/components/FileSystemRoutes";
//import TestApp from "./TestApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FileSystemRoutes />
  </React.StrictMode>
);
