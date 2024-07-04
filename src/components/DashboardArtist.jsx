import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosMusicalNote } from "react-icons/io";

import anto from '../assets/img/anto.png';

export default function DashboardArtist() {
  return (
    <section className="dashboard-links bg-[#121212] rounded-lg p-5 space-y-4 overflow-y-auto h-full">
      <div className="flex flex-col w-full">
        <div className="flex items-start justify-between w-full h-full">
          <div className="flex items-center justify-start space-x-6 w-full">
            <a href="#" className="flex items-center space-x-2 text-sm text-white font-bold">Example Playlist</a>
          </div>
          <div className="flex items-center justify-end space-x-3 w-full">
            <BsThreeDots className="text-gray-500 text-xl" />
            <IoClose className="text-gray-500 text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-4">
        <img src={anto} alt="Anto" className="w-full h-full rounded-lg" />
        <div className="flex items-center justify-between w-full mt-4">
          <div className="flex items-start justify-start w-full flex-col">
            <a href="#" className="flex items-center space-x-2 text-lg text-white font-bold">Song 1 (feat. example)</a>
            <a href="#" className="text-sm text-gray-400">Artist Name Example</a>
          </div>
          <div className="flex items-center justify-end space-x-3">
            <FiPlusCircle className="text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-4">
        <div className="bg-[#242424] px-4 py-2 rounded-lg flex flex-col">
          <div className="flex justify-between w-full">
            <a className="text-white text-sm font-semibold">Credits</a>
            <a className="text-gray-400 text-sm font-semibold">Show all</a>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-start justify-start w-full flex-col">
              <a href="#" className="flex items-center space-x-2 text-sm text-gray-200 font-bold">Artist Name Example</a>
              <a href="#" className="text-sm text-gray-300">Example Artist, Lyricist</a>
            </div>
            <div className="flex items-center justify-end space-x-3">
              <a href="#" className="text-white text-sm font-semibold border px-4 py-1 rounded-full">Follow</a>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-start justify-start w-full flex-col">
              <a href="#" className="flex items-center space-x-2 text-sm text-gray-200 font-bold">Artist</a>
              <a href="#" className="text-sm text-gray-300">Example Artist, Producer</a>
            </div>
            <div className="flex items-center justify-end space-x-3">
              <a href="#" className="text-white text-sm font-semibold border px-4 py-1 rounded-full">Unfollow</a>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-start justify-start w-full flex-col">
              <a href="#" className="flex items-center space-x-2 text-sm text-gray-200 font-bold">Artist</a>
              <a href="#" className="text-sm text-gray-300">Example Artist, Producer</a>
            </div>
            <div className="flex items-center justify-end space-x-3">
              <a href="#" className="text-white text-sm font-semibold border px-4 py-1 rounded-full">Unfollow</a>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-start justify-start w-full flex-col">
              <a href="#" className="flex items-center space-x-2 text-sm text-gray-200 font-bold">Artist</a>
              <a href="#" className="text-sm text-gray-300">Example Artist, Producer</a>
            </div>
            <div className="flex items-center justify-end space-x-3">
              <a href="#" className="text-white text-sm font-semibold border px-4 py-1 rounded-full">Unfollow</a>
            </div>
          </div>
        </div>
        <div className="bg-[#242424] px-4 py-2 rounded-lg flex flex-col mt-3">
          <div className="flex justify-between w-full">
            <a className="text-white text-sm font-semibold">Next in queue</a>
            <a className="text-gray-400 text-sm font-semibold">Open queue</a>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center justify-start w-full flex-row">
              <IoIosMusicalNote className="text-gray-200 text-sm" />
              <img src={anto} alt="Anto" className="ml-2 w-12 h-12 rounded-lg" />
              <div className="ml-3">
                <p className="text-white text-sm font-semibold">Song 1 (feat. example)</p>
                <p className="text-gray-300 text-xs">Artist Name Example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}