import React from "react";
import { Slider } from "@mui/material";
import { FiPlusCircle } from "react-icons/fi";
import { TfiControlShuffle } from "react-icons/tfi";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { FaCirclePause } from "react-icons/fa6";
import { SlLoop } from "react-icons/sl";
import { BsFillFileEarmarkPlayFill } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { TbDevices2 } from "react-icons/tb";
import { CgMiniPlayer } from "react-icons/cg";
import { IoResizeOutline } from "react-icons/io5";
import { GrVolumeLow } from "react-icons/gr";

import anto from '../../assets/img/anto.png';

export default function Footer() {
  return (
    <footer>
      <section className="footer w-[99%] h-[72px] flex items-center justify-between bg-black mx-auto">
        <MusicData />
        <MusicPlayer />
        <MusicActions />
      </section>
    </footer>
  );
}

function MusicData() {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <img src={anto} alt="Anto" className="w-14 h-14 rounded-lg" />
      </div>
      <div>
        <a href="#" className="text-sm text-white">Song Title Example </a>
        <p className="text-xs text-gray-400">Artist Name Example</p>
      </div>
      <div>
        <FiPlusCircle className="text-gray-400 text-lg" />
      </div>
    </div>
  )
}

function MusicPlayer() {
  const duration = 180;
  const [position, setPosition] = React.useState(32);

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-4 items-center text-white">
        <TfiControlShuffle className="text-lg" />
        <GiPreviousButton className="text-2xl" />
        <FaCirclePause className="text-3xl" />
        <GiNextButton className="text-2xl" />
        <SlLoop className="text-lg" />
      </div>

      <div className="w-[550px]">
        <div className="flex items-center space-x-2">
          <a href="#" className="text-xs text-gray-400 flex items-center">{formatTime(position)}</a>
          <div className="flex-1 flex items-center">
            <Slider
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => setPosition(value)}
              sx={{
                color: '#fff',
                height: 4,
                '& .MuiSlider-thumb': {
                  width: 8,
                  height: 8,
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&::before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: '0 2px 3px 0 rgba(0,0,0,0.4)',
                  },
                  '&.Mui-active': {
                    width: 20,
                    height: 20,
                  },
                },
                '& .MuiSlider-rail': {
                  opacity: 0.28,
                },
              }}
            />
          </div>
          <a href="#" className="text-xs text-gray-400 flex items-center">{formatTime(duration)}</a>
        </div>
      </div>
    </div>
  )
}

function MusicActions() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <BsFillFileEarmarkPlayFill className="text-gray-400 text-base" />
      <TbMicrophone2 className="text-gray-400 text-lg" />
      <HiOutlineQueueList className="text-gray-400 text-xl" />
      <TbDevices2 className="text-gray-400 text-xl" />
      <div className="flex items-center space-x-2">
        <GrVolumeLow className="text-gray-400 text-base" />
        <div className="w-[75px] mt-2">
          <Slider
            size="small"
            value={50}
            min={0}
            step={1}
            max={100}
            sx={{
              color: '#fff',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&::before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 2px 3px 0 rgba(0,0,0,0.4)',
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
          />
        </div>
      </div>
      <CgMiniPlayer className="text-gray-400 text-lg" />
      <IoResizeOutline className="text-gray-400 text-lg" />
    </div>
  )
}