import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { AboutPage, PrivacyPolicyPage } from "@nexca/marketing-pages";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/privacy-policy",
    Component: PrivacyPolicyPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
