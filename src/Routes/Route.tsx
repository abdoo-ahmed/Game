import React from "react";
import Layout from "../Components/Layout/Layout";
import { createHashRouter } from "react-router-dom";
const MMORPG = React.lazy(() => import("../Features/Components/MMORPG/MMORPG"));
const SHOOTER = React.lazy(() => import("../Features/Components/SHOOTER/SHOOTER"));
const SAILING = React.lazy(() => import("../Features/Components/SAILING/SAILING"));
const PERMADEATH = React.lazy(() => import("../Features/Components/PERMADEATH/PERMADEATH"));
const SUPERHERO = React.lazy(() => import("../Features/Components/SUPERHERO/SUPERHERO"));
const PIXEL = React.lazy(() => import("../Features/Components/PIXEL/PIXEL"));
const GameDetails = React.lazy(() => import("../Features/Components/Game Details/GameDetails"));
export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/MMORPG", element: <MMORPG /> },
      { path: "/", element: <MMORPG /> },
      { path: "/SHOOTER", element: <SHOOTER /> },
      { path: "/SAILING", element: <SAILING /> },
      { path: "/PERMADEATH", element: <PERMADEATH /> },
      { path: "/SUPERHERO", element: <SUPERHERO /> },
      { path: "/PIXEL", element: <PIXEL /> },
    ],
  },
  { path: "/gameDetails", element: <GameDetails /> },
]);
