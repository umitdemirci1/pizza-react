import { Outlet, Link } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-black items-center overflow-auto">
      <div className="w-full h-20 flex flex-row bg-blue-200 items-center">
        <div className="flex-1">
          <Link to="/" className=" text-3xl italic ml-4 font-extrabold text-red-600">
            Pizza React
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <input className="px-4 py-2 w-96 rounded-sm" type="text" placeholder="search..." />
        </div>
        <p className="flex-1 text-end mr-4">Name</p>
      </div>
      <div className="md:w-full h-full lg:w-[1000px] xl:w-[1360px] bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
