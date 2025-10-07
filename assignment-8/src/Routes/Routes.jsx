import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import AllApps from "../Pages/AllApps/AllApps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allApps",
        Component: AllApps,
      },
      {
        path: "allApps/:id",
        loader: () => fetch("appsData.json"),
        element: <h1>Hfgdg</h1>,
      },
    ],
  },
]);

export default router;
