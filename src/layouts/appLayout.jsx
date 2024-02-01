import { Outlet, Link } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-300 items-center overflow-auto">
      <div className="w-full h-20 flex flex-row bg-stone-900 items-center fixed z-10">
        <div className="flex-1">
          <Link to="/" className="text-3xl italic ml-4 font-extrabold text-red-500">
            Pizza React
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <input className="px-4 py-2 w-96 rounded-sm" type="text" placeholder="search..." />
        </div>
        <p className="flex-1 text-end text-white mr-4">Name</p>
      </div>
      <div className="md:w-full h-full lg:w-[1000px] xl:w-[1360px] bg-white mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
