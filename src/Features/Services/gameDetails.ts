import { GAME_DETAILS_API } from "../Utils/api";
import axios from "axios";

export const gameDetails = async (id: string) => {
  return await axios.get(GAME_DETAILS_API, {
    params: {id: id},
    headers: {
        'x-rapidapi-key': '8f5acfa378mshf09b6a6b539e12fp126f31jsn13ee7524d056',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    },
  });
};
