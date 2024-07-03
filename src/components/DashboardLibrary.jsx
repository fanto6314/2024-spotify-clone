import React from "react";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GoPlus, GoListUnordered  } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";

import anto from '../assets/img/anto.png';

export default function DashboardLibrary() {
  return (
    <section className="dashboard-links bg-[#121212] rounded-lg p-3 space-y-3 min-h-full">
      <div className="flex items-center justify-between space-x-4 text-gray-400">
        <div className="flex items-center space-x-2">
          <TbLayoutSidebarLeftCollapseFilled className="text-xl"/>
          <h2 className="text-base font-semibold">Your Library</h2>
        </div>
        <div className="flex items-center space-x-2">
          <GoPlus className="text-2xl"/>
          <FaArrowRightLong className="text-xl"/>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-white">
        <div className="bg-[#282828] rounded-full py-1.5 px-3">
          <p className="text-xs">Playlist</p>
        </div>
        <div className="bg-[#282828] rounded-full py-1.5 px-3">
          <p className="text-xs">Albums</p>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-4 text-gray-400">
        <div className="flex items-center space-x-2">
          <IoSearchSharp className="text-xl"/>
        </div>
        <div className="flex items-center space-x-2">
          <a className="text-base -mr-1 -mt-0.5">Recents</a>
          <GoListUnordered className="text-xl"/>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-start space-x-4">
          <div className="bg-[#272727] rounded-lg p-2 w-12 h-12 flex items-center justify-center">
            <CiFolderOn className="text-3xl text-white"/>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-base text-white">Artists</h2>
            <p className="text-sm text-gray-400">6 playlists</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaCaretRight className="text-xl text-gray-400"/>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-start space-x-4">
          <img src={anto} alt="anto" className="w-12 h-12 rounded-lg"/>
          <div className="flex flex-col justify-start">
            <h2 className="text-base text-white">Example Playlist</h2>
            <p className="text-sm text-gray-400">Playlist • anto6314</p>
          </div>
        </div>
      </div>
    </section>
  );
}