import Typed from "react-typed";

const Main = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] h-screen w-full mx-auto text-center flex flex-col justify-center">
        <p className="text-[rgb(116,214,183)]  font-bold p-2">
          {" "}
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold md:py-6 md:text-7xl text-4xl sm:text-5xl">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold md:p-2">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl pl-2 sm:text-3xl text-xl font-bold md:p-2"
            strings={["BTB", "BTC", "C2C"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl font-bold md:pl-2 text-xl text-gray-400 pt-3">
          Monitor your data Analytics to increase BTB,BTC & SASS
        </p>
        <p className="md:text-2xl font-bold text-xl text-gray-400">platforms</p>

        <button className="w-[200px] text-black font-bold rounded-lg bg-[rgb(116,214,183)] mx-auto p-3 mt-3 text-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Main;
