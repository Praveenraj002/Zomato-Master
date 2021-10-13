import React, { useState } from 'react'
import {HiMenu} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";

//components
import MenuListContainer from './MenuListContainer';

const FloatMenuBtn = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => setIsClicked(!isClicked)

    return (
        <>
        <div className="fixed z-30 w-8/12 flex flex-col items-end bottom-2 right-2 md:hiddem">
           {
               isClicked &&( <div className="p-3 bg-white h-48 overflow-y-scroll">
                <MenuListContainer/>
            </div>)
           }
                <button onClick={toggleMenu} className="fixed z-30 bottom-2 right-2 text-white flex flex items-center bg-yellow-900 px-3 py-2 rounded-full md:hidden">
                {isClicked ? <AiOutlineClose/> : <HiMenu/>}Menu
                </button>
        </div>
    
        </>
    )
}

export default FloatMenuBtn;
