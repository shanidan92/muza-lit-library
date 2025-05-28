import {
  type RouteConfig,
  type RouteConfigEntry,
  index,
} from "@react-router/dev/routes";
import { createBrowserRouter } from "react-router";
import App from "./root";

const home = {
  file: "routes/home.tsx",
  id: "home",
  index: true,
} as RouteConfigEntry;

const albumPage = {
  file: "routes/albumPage.tsx",
  path: "routes/albumPage",
  id: "album",
  index: true,
} as RouteConfigEntry;

export default [home, albumPage] satisfies RouteConfig;
