import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Components/AppDetails/AppDetails";
import InstalledApps from "../Pages/InstalledApps/InstalledApps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ErrorAppPage from "../Pages/ErrorAppPage/ErrorAppPage";

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
        loader: ({ params }) => {},
        Component: AppDetails,
        errorElement: <ErrorAppPage />,
      },
      {
        path: "installedApps",
        Component: InstalledApps,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
