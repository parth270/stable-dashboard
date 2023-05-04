import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/store";
import HomePage from "./routes";
import AiQuerryPage from "./routes/ai-querry";
import Loader from "./layouts/Loader";
import StatisticsOnlyPage from "./routes/statistics-only";
import SummarisedPage from "./routes/summarised";
import NarratedPage from "./routes/narrated";
import VideoDrivenPage from "./routes/video-driven";
import AvatarsPage from "./routes/avatars";
import ImmersiveExperiencePage from "./routes/immersive-experience";
import IntroPage from "./routes/Intro";
import Walk1 from "./routes/walk-1";
import Walk2 from "./routes/walk-2";
import Walk3 from "./routes/walk-3";
import Walk4 from "./routes/walk-4";
import Walk5 from "./routes/walk-5";
import Walk6 from "./routes/walk-6";
import Walk7 from "./routes/walk-7";
import IntroVid from "./routes/Intro-vid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/intro",
    element: <IntroVid />,
  },
  {
    path: "/walkthrough/1",
    element: <Walk1 />,
  },
  // {
  //   path: "/walkthrough/2",
  //   element: <Walk2 />,
  // },
  {
    path: "/walkthrough/3",
    element: <Walk3 />,
  },
  {
    path: "/walkthrough/4",
    element: <Walk4 />,
  },
  {
    path: "/walkthrough/5",
    element: <Walk5 />,
  },
  {
    path: "/walkthrough/6",
    element: <Walk6 />,
  },
  {
    path: "/walkthrough/7",
    element: <Walk7 />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/ai-querry",
    element: <AiQuerryPage />,
  },
  {
    path: "/statistics-only",
    element: <StatisticsOnlyPage />,
  },
  {
    path: "/narrated",
    element: <NarratedPage />,
  },
  {
    path: "/video-driven",
    element: <VideoDrivenPage />,
  },
  {
    path: "/avatars",
    element: <AvatarsPage />,
  },
  {
    path: "/immersive-experience",
    element: <ImmersiveExperiencePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Loader>
      <RouterProvider router={router} />
    </Loader>
  </Provider>
);
