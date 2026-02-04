import Layout from "../Components/Layout/Layout";
import { createHashRouter } from "react-router-dom";
import MMORPG from "../Features/Components/MMORPG/MMORPG";
import SHOOTER from "../Features/Components/SHOOTER/SHOOTER";
import SAILING from "../Features/Components/SAILING/SAILING";
import PERMADEATH from "../Features/Components/PERMADEATH/PERMADEATH";
import SUPERHERO from "../Features/Components/SUPERHERO/SUPERHERO";
import PIXEL from "../Features/Components/PIXEL/PIXEL";
import GameDetails from "../Features/Components/Game Details/GameDetails";

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
