import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Projects from "./routes/projects";
import Index from "./routes/index";
import LiveProjects from "./routes/liveProjects";
import FailedProjects from "./routes/failedProjects";
import Contact, { loader as contactLoader } from "./routes/liveProjects";
import Blogs from "./routes/blogs";
import BlogDetail from "./routes/blogDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "live-projects/:projectName",
        element: <LiveProjects />,
        loader: contactLoader,
      },
      {
        path: "failed-projects/:projectName",
        element: <FailedProjects />,
        loader: contactLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
