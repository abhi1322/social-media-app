import Logo from "@/assets/Circle-light-mode.svg";

import { CircleUserRoundIcon, Home, PlusCircleIcon } from "lucide-react";

const SideBar = ({ setActivePage, activePage }) => {
  return (
    <>
      <aside className="hidden border-r lg:w-40 min-h-screen md:flex flex-col bg-white  justify-start px-2 py-10 ">
        <img className="w-8 lg:w-9 mx-auto" src={Logo} alt="logo" />
        <nav className="mt-16 w-full grid gap-2 font-semibold">
          <button
            className={`flex gap-2 items-center text-sm hover:bg-neutral-100 px-4 py-3 rounded-md ${
              activePage === "home"
                ? "bg-blue-600 text-white  hover:bg-blue-500"
                : ""
            }`}
            onClick={() => setActivePage("home")}
          >
            <Home className="w-5 h-5" />
            <p className="hidden lg:flex">Home</p>
          </button>
          <button
            className={`flex gap-2 items-center text-sm hover:bg-neutral-100 px-4 py-3 rounded-md ${
              activePage === "add post"
                ? "bg-blue-600 text-white  hover:bg-blue-500"
                : ""
            }`}
            onClick={() => setActivePage("add post")}
          >
            <PlusCircleIcon className="w-5 h-5" />
            <p className="hidden lg:flex">Add post</p>
          </button>
          <button
            className={`flex gap-2 items-center text-sm hover:bg-neutral-100 px-4 py-3 rounded-md ${
              activePage === "profile"
                ? "bg-blue-600 text-white  hover:bg-blue-500"
                : ""
            }`}
            onClick={() => setActivePage("profile")}
          >
            <CircleUserRoundIcon className="w-5 h-5" />
            <p className="hidden lg:flex">Profile</p>
          </button>
        </nav>
      </aside>
      <nav className="fixed md:hidden w-full justify-between px-8 py-4 bottom-0 bg-white z-50  flex  gap-2 font-semibold border-t">
        <button
          className={`flex gap-2 items-center text-sm hover:bg-neutral-100 px-4 py-3 rounded-md ${
            activePage === "home"
              ? "bg-blue-600 text-white  hover:bg-blue-500"
              : ""
          }`}
          onClick={() => setActivePage("home")}
        >
          <Home className="w-5 h-5" />
          <p className="hidden lg:flex">Home</p>
        </button>
        <button
          className={`flex gap-2 items-center text-sm hover:bg-neutral-100 px-4 py-3 rounded-md ${
            activePage === "add post"
              ? "bg-blue-600 text-white  hover:bg-blue-500"
              : ""
          }`}
          onClick={() => setActivePage("add post")}
        >
          <PlusCircleIcon className="w-5 h-5" />
          <p className="hidden lg:flex">Add post</p>
        </button>
        <button
          className={`flex gap-2 items-center text-sm hover:bg-neutral-100 px-4 py-3 rounded-md ${
            activePage === "profile"
              ? "bg-blue-600 text-white  hover:bg-blue-500"
              : ""
          }`}
          onClick={() => setActivePage("profile")}
        >
          <CircleUserRoundIcon className="w-5 h-5" />
          <p className="hidden lg:flex">Profile</p>
        </button>
      </nav>
    </>
  );
};

export default SideBar;
