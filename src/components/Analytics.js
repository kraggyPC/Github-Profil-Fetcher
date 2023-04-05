import Laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="mt-11 flex flex-col md:flex-row md:items-center justify-center text-black  w-full bg-white">
      <img className="mt-11 w-full  md:w-3/6" src={Laptop} />
      <div className="flex flex-col md:flex">
        <p className="text-md font-bold p-2 text-[rgb(71,196,157)]">
          DATA ANALYTICS DASHBOARD
        </p>
        <p className="text-xl font-bold p-2">Manage Data Analytics Centrally</p>
        <p className="p-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
          natus? Illum, tempore qui excepturi placeat laborum aspernatur
          blanditiis nisi harum dolores repellat dignissimos fugiat illo
          veritatis explicabo iste eligendi autem, architecto vitae fuga quis?
        </p>
        <button className="bg-black mx-auto py-3 px-8  rounded-xl mt-5 mb-16  text-[rgb(116,214,183)]  content-start font-bold md:align">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Analytics;
