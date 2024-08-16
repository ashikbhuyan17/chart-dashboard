import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

export default function MainLayout() {
  let location = useLocation();
  console.log("🚀 ~ MainLayout ~ location:", location.pathname);
  const sidebarData = [
    {
      title: "Dashboard",
      icon: <Icon icon="material-symbols:dashboard" />,
      pathname: "/",
    },
    {
      title: "Map",
      icon: <Icon icon="material-symbols:dashboard" />,
      pathname: "/map",
    },
    {
      title: "Saved Location",
      icon: <Icon icon="material-symbols:dashboard" />,
      pathname: "/location",
    },
    {
      title: "Calender",
      icon: <Icon icon="material-symbols:dashboard" />,
      pathname: "/calender",
    },
    {
      title: "Setting",
      icon: <Icon icon="material-symbols:dashboard" />,
      pathname: "/setting",
    },
  ];
  return (
    <div className="flex gap-x-10">
      {" "}
      <div className="border-r w-[300px] shadow-sm h-[100vh]">
        {sidebarData.map((data, index) => (
          <div
            key={index}
            className={` ${
              location.pathname == data.pathname && "bg-blue-950 text-white "
            } flex gap-x-2 items-center text-lg   px-4 py-2 cursor-pointer`}
          >
            <p>{data.icon}</p> <p>{data.title}</p>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
