import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.component";
import { NamePage } from "@/pages/NamePage";
import { CovidPage } from "@/pages/CovidPage";
import { SideBar } from "@/components/SideBar/SideBar.component";
import { URLS } from "@/consts";
export const router = createBrowserRouter([
  {
    path: URLS.NAME_INFO,
    element: <SideBar />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: URLS.NAME_INFO,
        element: <NamePage />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: URLS.COVID_INFO,
        element: <CovidPage />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);
