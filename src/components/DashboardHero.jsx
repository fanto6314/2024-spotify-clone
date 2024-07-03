import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { FaCirclePause } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { GoListUnordered } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";

import anto from '../assets/img/anto.png';
import CompanyFooter from './ui/CompanyFooter';

const songs = [
  {
    title: "Song 1",
    album: "Album 1",
    duration: 225,
    dateAdded: "2024-03-07",
    artist: "Artist 1",
    logo: anto,
  },
  {
    title: "Song 2",
    album: "Album 2",
    duration: 225,
    dateAdded: "2024-03-07",
    artist: "Artist 2",
    logo: anto,
  }
];

const recommendedSongs = [
  {
    title: "Song 1",
    album: "Album 1",
    duration: 225,
    dateAdded: "2024-03-07",
    artist: "Artist 1",
    logo: anto,
  },
  {
    title: "Song 2",
    album: "Album 2",
    duration: 225,
    dateAdded: "2024-03-07",
    artist: "Artist 2",
    logo: anto,
  },
  {
    title: "Song 3",
    album: "Album 3",
    duration: 225,
    dateAdded: "2024-03-07",
    artist: "Artist 3",
    logo: anto,
  }
];

export default function DashboardHero() {
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  }

  return (
    <section className="dashboard-hero bg-[#121212] rounded-lg h-full overflow-y-auto">
      <div className="flex flex-col justify-between space-x-4 h-[340px] bg-gradient-to-b from-[#044aaf] to-[#02265a] rounded-t-lg">
        <div className="flex justify-between items-start w-full p-3">
          <div className="flex space-x-2">
            <GrFormPrevious className="text-gray-300 text-3xl rounded-full bg-black bg-opacity-60" />
            <GrFormNext className="text-gray-300 text-3xl rounded-full bg-black bg-opacity-40" />
          </div>
          <div className="flex space-x-2">
            <GoBell className="text-3xl p-1.5 rounded-full bg-black bg-opacity-60 text-gray-300" />
            <img src={anto} alt="Anto" className="w-[30px] h-[30px] rounded-full" />
          </div>
        </div>
        <div className="flex items-start justify-start mb-5">
          <div className="flex flex-row items-end justify-start space-x-6">
            <img src={anto} alt="Anto" className="w-[230px] h-[230px] rounded-lg" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-white text-sm font-semibold">Playlist</p>
              <h1 className="text-white text-7xl font-bold mt-1">Example Playlist</h1>
              <p className="text-gray-300 text-base mt-5">This is Example Playlist. The essentials tracks, all in one playlist.</p>
              <div className="flex items-center mt-2 mb-1">
                <img src={anto} alt="Anto" className="w-6 h-6 rounded-full" />
                <p className="text-white text-sm font-semibold ml-1">Anto</p>
                <p className="text-white mx-2">•</p>
                <p className="text-white text-sm">12,565 saves</p>
                <p className="text-white mx-2">•</p>
                <p className="text-white text-sm">6 songs</p>
                <p className="text-white mr-1">,</p>
                <p className="text-gray-300 text-sm">about 1hr 15min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-start justify-between h-[235px] w-full bg-gradient-to-b from-[#011d46] to-[#121212]">
          <div className="flex items-center justify-start space-x-6 w-full p-5">
            <FaCirclePause className="text-[#1ed760] bg-black text-5xl rounded-full" />
            <FaCheckCircle className="text-[#1ed760] bg-black text-3xl rounded-full" />
            <BsThreeDots className="text-gray-400 text-2xl rounded-full cursor-pointer" />
          </div>
          <div className="flex items-center justify-end space-x-2 w-full p-5 text-gray-200">
            <a className="text-base -mr-1 -mt-0.5">List</a>
            <GoListUnordered className="text-xl"/>
          </div>
        </div>
        <div className="flex items-center justify-between w-full p-5 -mt-44">
          <div className="p-4 text-white rounded-lg w-full">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-gray-400 border-b border-gray-600">
                  <th className="py-1 px-2">#</th>
                  <th className="py-1 px-2">Title</th>
                  <th className="py-1 px-2">Album</th>
                  <th className="py-1 px-2">Date Added</th>
                  <th className="py-1 px-2"><FaRegClock /></th>
                </tr>
              </thead>
              <tbody>
                {songs.map((song, index) => (
                  <tr key={index}>
                    <td className="py-1 px-2 text-gray-400">{index + 1}</td>
                    <td className="py-1 px-2 flex items-center space-x-4">
                      <img src={song.logo} alt="logo" className="w-10 h-10 rounded-md" />
                      <div>
                        <div className="text-base font-semibold">{song.title}</div>
                        <div className="text-sm text-gray-400">{song.artist}</div>
                      </div>
                    </td>
                    <td className="py-1 px-2 text-gray-400">{song.album}</td>
                    <td className="py-1 px-2 text-gray-400">{song.dateAdded}</td>
                    <td className="py-1 px-2 text-gray-400">{formatTime(song.duration)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start flex-col w-full p-5 mt-2">
        <div className="flex items-start flex-col">
          <p className="text-white text-xl font-semibold">Recommended</p>
          <p className="text-gray-400 text-sm">Based on what's in this playlist</p>
        </div>
        <div className="flex items-center justify-end space-y-2 flex-col w-full mt-6">
          {recommendedSongs.map((song, index) => (
            <div key={index} className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img src={song.logo} alt="logo" className="w-10 h-10 rounded-md" />
                <div>
                  <div className="text-base font-semibold">{song.title}</div>
                  <div className="text-sm text-gray-400">{song.artist}</div>
                </div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-400">{song.album}</div>
              <div className="flex items-center space-x-2">
                <button className="text-white text-sm font-semibold border rounded-2xl px-4 py-1">Add</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start justify-end w-full p-5">
        <button className="text-gray-400 text-lg font-semibold mr-4">Refresh</button>
      </div>
      <CompanyFooter />
    </section>
  );
}