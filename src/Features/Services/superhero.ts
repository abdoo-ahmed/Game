import { SUPERHERO_API } from "../Utils/api";
import axios from "axios";

export const superhero = async () => {
  return await axios.get(SUPERHERO_API, {
    headers: {
      "x-rapidapi-key": "8f5acfa378mshf09b6a6b539e12fp126f31jsn13ee7524d056",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  });
};
