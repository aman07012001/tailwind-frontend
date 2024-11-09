import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./components/Card.jsx";
import Login from "./components/Login.jsx";
import Hero from "./components/Hero.jsx";
import StepByStep from "./components/StepByStep.jsx";

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

const Contact = lazy(() =>
  wait(1000).then(() => import("./components/Contact.jsx"))
);
const About = lazy(() =>
  wait(1000).then(() => import("./components/About.jsx"))
);
const Home = lazy(() => wait(1000).then(() => import("./components/Home.jsx")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },

      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
