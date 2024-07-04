import React, { useContext } from "react";
import CollapseContext from "../contexts/CollapseContext";
import { IoHomeOutline, IoSearchSharp } from "react-icons/io5";

export default function DashboardLinks() {
  const { isCollapsed } = useContext(CollapseContext);
  return (
    <section className="dashboard-links bg-[#121212] rounded-lg p-5 space-y-4">
      <div className="flex items-center space-x-4">
        <IoHomeOutline className="text-2xl text-gray-400" />
        {!isCollapsed && <span className="text-gray-400 text-sm font-bold">Home</span>}
      </div>
      <div className="flex items-center space-x-4">
        <IoSearchSharp className="text-xl text-gray-400" />
        {!isCollapsed && <span className="text-gray-400 text-sm font-bold">Search</span>}
      </div>
    </section>
  );
}