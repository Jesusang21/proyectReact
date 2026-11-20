import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import { Inicio } from "./pages/Inicio.tsx";
import { Nosotros } from "./pages/Nosotros.tsx";
import { NoEncontrado } from "./pages/NoEncontrado.tsx";
import { Contacto } from "./pages/Contacto.tsx";
import { Gracias } from "./pages/Gracias.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Inicio },     // index: true → se muestra en "/"
      { path: "nosotros", Component: Nosotros },
      { path: "contacto", Component: Contacto },
      { path: "gracias", Component: Gracias },
      { path: "*", Component: NoEncontrado },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);