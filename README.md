# 🎮 Game Explorer --- React + TypeScript + Vite

This project is a fully modular React + TypeScript application that
displays free-to-play games fetched from the **Free-To-Play Games
Database API**.\
Each game category (MMORPG, Permadeath, Pixel, Sailing, Shooter,
Superhero) is displayed on a separate page, and clicking any game card
opens a full details page.

The project uses a clean, scalable folder structure separating
components, features, hooks, services, utils, routes, and layout.

## 🚀 Tech Stack

-   **React**
-   **TypeScript**
-   **Vite**
-   **Axios**
-   **React Query**
-   **TailwindCSS**
-   **React Router**
-   **ESLint**

## 📌 API Used

Base URL:

    https://free-to-play-games-database.p.rapidapi.com

Endpoints: - /games?category=MMORPG - /games?category=permadeath -
/games?category=pixel - /games?category=sailing -
/games?category=shooter - /games?category=superhero - /game?id=###
(details)

## 📂 Project Structure

    src/
    │
    ├── Components/
    │   ├── Layout/
    │   │   └── Layout.tsx
    │   └── Navbar/
    │       └── Navbar.tsx
    │
    ├── Features/
    │   └── Components/
    │       ├── MMORPG.tsx
    │       ├── PERMADEATH.tsx
    │       ├── PIXEL.tsx
    │       ├── SAILING.tsx
    │       ├── SHOOTER.tsx
    │       └── SUPERHERO.tsx
    │
    ├── Hooks/
    │   ├── usemmorpg.ts
    │   ├── usepermadeath.ts
    │   ├── usepixel.ts
    │   ├── usesailing.ts
    │   ├── useshooter.ts
    │   └── usesuperhero.ts
    │
    ├── Services/
    │   ├── mmorpg.ts
    │   ├── permadeath.ts
    │   ├── pixel.ts
    │   ├── sailing.ts
    │   ├── shooter.ts
    │   └── superhero.ts
    │
    ├── Utils/
    │   ├── api.ts
    │   └── utils.ts
    │
    ├── LoadingScreen/
    │   └── LoadingScreen.tsx
    │
    ├── Routes/
    │   └── Route.tsx
    │
    ├── assets/
    │   └── Images/
    │       └── react.svg
    │
    ├── App.tsx
    ├── main.tsx
    ├── index.css
    └── App.css

## 📡 API Layer Example

``` ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
});

export default api;
```

## 🔄 React Query Example

``` ts
export const usemmorpg = () => {
  return useQuery({
    queryKey: ["mmorpg"],
    queryFn: async () => {
      const { data } = await getMMORPGGames();
      return data;
    },
  });
};
```

## 🧭 Routing Example

``` tsx
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

```

