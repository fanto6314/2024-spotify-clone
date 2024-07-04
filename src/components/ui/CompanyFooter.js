import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function CompanyFooter() {
  return (
    <div className="text-[#a7a7a7] py-8">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap justify-between text-sm">
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h6 className="font-bold mb-2 text-white">Company</h6>
            <ul className='space-y-2'>
              <li className="mb-1"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">For the Record</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h6 className="font-bold mb-2 text-white">Communities</h6>
            <ul className='space-y-2'>
              <li className="mb-1"><a href="#" className="hover:underline">For Artists</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Developers</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Advertising</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Vendors</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h6 className="font-bold mb-2 text-white">Useful links</h6>
            <ul className='space-y-2'>
              <li className="mb-1"><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Free Mobile App</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4 md:mb-0">
            <h6 className="font-bold mb-2 text-white">Spotify Plans</h6>
            <ul className='space-y-2'>
              <li className="mb-1"><a href="#" className="hover:underline">Premium Individual</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Premium Duo</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Premium Family</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Premium Student</a></li>
              <li><a href="#" className="hover:underline">Spotify Free</a></li>
            </ul>
          </div>
          <div className="flex w-full md:w-1/5 mb-4 md:mb-0 justify-end text-white">
            <FaInstagram className="text-4xl mr-4 rounded-full bg-[#292929] p-2" />
            <FaTwitter className="text-4xl mr-4 rounded-full bg-[#292929] p-2" />
            <FaFacebook className="text-4xl rounded-full bg-[#292929] p-2" />
          </div>
        </div>
        <hr className="border-[#292929] my-8" />
        <div className="flex justify-between mt-12 mb-12">
          <div className="w-auto text-sm">
            <a href="#" className="hover:underline mr-4">Legal</a>
            <a href="#" className="hover:underline mr-4">Safety & Privacy Center</a>
            <a href="#" className="hover:underline mr-4">Privacy Policy</a>
            <a href="#" className="hover:underline mr-4">Cookie Settings</a>
            <a href="#" className="hover:underline mr-4">About Ads</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
          <div className="w-auto text-sm text-right">
            <span>&copy; 2024 Spotify AB</span>
          </div>
        </div>
      </div>
    </div>
  );
};