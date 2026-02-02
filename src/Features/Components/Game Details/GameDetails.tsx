import React from "react";
import { useGameDetails } from "../../Hooks/usegameDetails";
import LoadingScreen from "../LoadingScreen/LoadingScreen";


const GameDetails = () => {

  const id =localStorage.getItem("id");
  const { data  , isLoading, error} = useGameDetails(String(id));
  
  function handleClose(){
    localStorage.removeItem("id");
    window.history.back();
  }

  function handleShowGame(){
    if(data && data.data.game_url){
      window.open(data.data.game_url, "_blank");
    }
  }

  if (isLoading) return <LoadingScreen />;
  if(error){
    return <span className="text-[40px] text-center mt-[100px]">404</span>;
  }
  return (
    <React.Fragment>
      <div className=" w-full font-comic">
        <div className="bg-[#27282B] min-h-screen text-white p-6 md:p-14">
          <button onClick={handleClose} className="absolute top-10 right-16 text-gray-400 hover:text-white text-2xl">
            ✕
          </button>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Details Game
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full">
              <img
                src={`${data?.data.thumbnail}`}
                alt="Lost Ark"
                className="w-full object-cover"
              />
            </div>

            <div className="space-y-4 md:col-span-2">
              <h3 className="text-2xl font-bold">Title: {data?.data.title}</h3>

              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Category:</span>
                <span className="px-3 py-1 bg-cyan-500 text-black rounded-full">
                  {data?.data.genre}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Platform:</span>
                <span className="px-3 py-1 bg-cyan-500 text-black rounded-full">
                  {data?.data.platform}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Status:</span>
                <span className="px-3 py-1 bg-cyan-500 text-black rounded-full">
                  {data?.data.status}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-200">
                {data?.data.description}
              </p>

              <button onClick={handleShowGame} className="mt-4 px-6 py-2 border-2 cursor-pointer border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-white transition-all duration-500">
                Show Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GameDetails;
