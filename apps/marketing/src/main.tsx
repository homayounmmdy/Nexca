import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./pages/About";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

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
