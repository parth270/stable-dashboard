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

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/summarised",
    element: <SummarisedPage />,
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
