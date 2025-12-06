import { PERMADEATH_API } from "../Utils/api";
import axios from "axios";

export const permadeath = async () => {
  return await axios.get(PERMADEATH_API, {
    headers: {
      "x-rapidapi-key": "8f5acfa378mshf09b6a6b539e12fp126f31jsn13ee7524d056",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  });
};
