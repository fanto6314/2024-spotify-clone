import React, { useContext } from "react";
import CollapseContext from "../contexts/CollapseContext";
import { GoPlus, GoListUnordered  } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { FaCaretRight } from "react-icons/fa";

import anto from '../assets/img/anto.png';

export default function DashboardLibrary() {
  const { isCollapsed, setIsCollapsed } = useContext(CollapseContext);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <section className="dashboard-links bg-[#121212] rounded-lg p-3 space-y-3 min-h-full">
      <div className={`flex items-center space-x-4 text-gray-400 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed ? (	
          <>
            <div className="flex items-center space-x-2">
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-gray-400"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
              <h2 className="text-base font-semibold">Your Library</h2>
            </div>
            <div className="flex items-center space-x-2">
              <GoPlus className="text-2xl"/>
              <FaArrowRightLong className="text-xl"/>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="w-[28px] h-[28px] fill-gray-400"><path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path></svg>
          </div>
        )}
      </div>

      {!isCollapsed && (
        <>
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
        </>
      )}

      <div className={`flex items-center space-x-4 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-start space-x-4">
          <div className={`bg-[#272727] rounded-lg p-2 flex items-center justify-center w-12 h-12`}>
            <CiFolderOn className="text-3xl text-white"/>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col justify-start">
              <h2 className="text-base text-white">Artists</h2>
              <p className="text-sm text-gray-400">6 playlists</p>
            </div>
          )}
        </div>
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <FaCaretRight className="text-xl text-gray-400"/>
          </div>
        )}
      </div>

      <div className={`flex items-center space-x-4 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <div className="flex items-start space-x-4">
          <div className={`flex items-center justify-center w-12 h-12`}>
            <img src={anto} alt="anto" className="w-full h-full rounded-lg"/>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col justify-start">
              <h2 className="text-base text-white">Example Playlist</h2>
              <p className="text-sm text-gray-400">Playlist • anto6314</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}