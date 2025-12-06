import { Triangle } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <>
      <div className="flex justify-center absolute top-0 right-0 left-0 items-center h-screen bg-[#272B30]">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#3A497B"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default LoadingScreen;
