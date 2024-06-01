import { RouteObject, useRoutes } from "react-router-dom";
import {
  COMMENTS_ROUTE,
  STICKERS_ROUTE,
  HOME_ROUTE,
  MEDITATESTEPS_ROUTE,
  FORM_ROUTE,
  PDF_ROUTE,
  PAGINATION_ROUTE,
  AUTH_ROUTE,
} from "./config";
import Home from "../../pages/home";
import StickersPage from "../../pages/stickers";
import CommentsPage from "../../pages/comments";
import MeditationStepsPage from "../../pages/meditation-steps";
import Form from "../../components/Form";
import PdfPage from "../../pages/pdf";
import DynamicPagination from "../../components/DynamicPagination";
// import UnauthorizedPage from "../../pages/unathorized";
import ProfilePage from "../../pages/profile";

const MainRouter = ({ isAuth = false }) => {
  const basePath: RouteObject[] = [
    { path: HOME_ROUTE, element: <Home /> },
    { path: AUTH_ROUTE, element: <ProfilePage /> },
  ];

  const authPath: RouteObject[] = [
    { path: STICKERS_ROUTE, element: <StickersPage /> },
    { path: COMMENTS_ROUTE, element: <CommentsPage /> },
    { path: MEDITATESTEPS_ROUTE, element: <MeditationStepsPage /> },
    { path: FORM_ROUTE, element: <Form /> },
    { path: PDF_ROUTE, element: <PdfPage /> },
    { path: PAGINATION_ROUTE, element: <DynamicPagination /> },
  ];

  const resultPaths: RouteObject[] = basePath;

  if (isAuth) {
    resultPaths.push(...authPath);
  } else {
    resultPaths.push({ path: "*", element: <ProfilePage /> });
    // resultPaths.push({ path: "*", element: <UnauthorizedPage /> });
  }

  return useRoutes(resultPaths);
};

export default MainRouter;
