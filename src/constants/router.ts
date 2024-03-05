import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/Root.tsx";
import Home from "../components/page/Home.tsx";
import Project from "../routes/Project.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/projects/:projectSlug",
        element: <Project />,
      },
    ],
  },
]);

export default router;
