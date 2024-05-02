import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import GameDetailPage from "./components/GameDetailPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "games/:slug",
          element: <GameDetailPage />,
        },
      ],
    },
]);

export default router;