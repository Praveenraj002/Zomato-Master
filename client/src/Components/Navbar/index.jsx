import React from "react";
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io";
import {FiSearch} from "react-icons/fi";

const MobileNav = () => {
    return <div className="flex w-full items-center justify-between md:hidden">
          <div className="w-28">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato Logo" className="w-full h-full" />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
            <span className="border p-2 border-gray-300 text-zomato-400 rounded-full"><FaUserAlt/></span>
        </div>
    </div>
};

const MediumNav = () => {
    return (<>
    <div className="hidden gap-4 md:flex w-full items-center justify-between lg:w-3/4">
    <div className="w-28">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato Logo" className="w-full h-full "/>
        </div>
        <div className="w-full bg-white shadow-md p-3 flex gap-3 items-center border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gary-300 pr-2">
                <span className="text-zomato-400"><HiLocationMarker/></span>
                <input type="text" placeholder="Chennai" className="focus:outline-none"/>
                <IoMdArrowDropdown/>
            </div>
            <div className="flex items-center gap-2 w-full">
                <FiSearch/>
                <input type="search" placeholder="search for restaurant, cuisine or dishes" className="w-full focus:outline-none"/>
            </div>
        </div>
        <div className="flex gap-3">
            <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
            <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
        </div>
    </div>
    </>);

};

const LargeNav = () => {
    return (<>
    <div className="hidden gap-10 md:flex w-full items-center justify-between ">
    <div className="w-28">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato Logo" className="w-full h-full"/>
        </div>
        <div className="w-full bg-white shadow-md p-3 flex gap-3 items-center border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gary-300 pr-2">
                <span className="text-zomato-400"><HiLocationMarker/></span>
                <input type="text" placeholder="Chennai" />
                <IoMdArrowDropdown/>
            </div>
            <div className="flex items-center gap-2">
                <FiSearch/>
                <input type="search" placeholder="search for restaurant" />
            </div>
        </div>
        <div className="flex gap-4">
            <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
            <button className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
        </div>
    </div>
    </>);

};

const Navbar = () => {
    return ( <>
    <nav className="p-4 flex bg-white shadow-md -px-4 items-center">
          <MobileNav/>
          <MediumNav/>
    </nav>
    </>
   );
};

export default Navbar;
