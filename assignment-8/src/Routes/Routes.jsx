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
        loader: () => fetch("appsData.json"),
        Component: Home,
      },
      {
        path: "allApps",
        loader: () => fetch("appsData.json"),
        Component: AllApps,
      },
    ],
  },
]);

export default router;
