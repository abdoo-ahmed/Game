import { type Key } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { useshooter } from "../../Hooks/useshooter";
import { useNavigate } from "react-router-dom";

const SHOOTER = () => {
  const { data, error, isLoading } = useshooter();

  const navigate = useNavigate();
  function handleClick(id: number) {
    localStorage.setItem("id" , `${id}`);
    navigate("/gameDetails");
  }

  if (isLoading) return <LoadingScreen />;

  if (error)
    return <span className="text-[40px] text-center mt-[100px]">404</span>;

  return (
    <>
      <div className="m-[70px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 cards-container">
          {data?.data.map(
            (
              game: {
                title: string;
                genre: string;
                thumbnail: string;
                short_description: string;
                platform: string;
                id:number;
              },
              index: Key | null | undefined
            ) => {
              return (
                <div
                  key={index}
                  className="border border-[#202328] cursor-pointer p-4 rounded-xl shadow group hover:scale-105 transition-transform duration-500 h-full flex flex-col"
                >
                  <div onClick={() => handleClick(game.id)} className="text-white font-Comfortaa brightness-[0.6] group-hover:brightness-100 transition-all duration-700 flex flex-col h-full">
                    <img
                      src={game.thumbnail}
                      alt={game.title}
                      className="rounded-md w-full"
                    />

                    <div className="flex justify-between items-center mt-3">
                      <h2 className="text-lg font-semibold">{game.title}</h2>
                      <span className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">
                        Free
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 mt-2 grow transition-all duration-300">
                      {game.short_description}
                    </p>

                    <div className="flex justify-between mt-4">
                      <span className="bg-[#32383E] px-3 py-1 text-xs rounded-md">
                        {game.genre}
                      </span>
                      <span className="bg-[#32383E] px-3 py-1 text-xs rounded-md">
                        {game.platform}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default SHOOTER;
