import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {IoMdArrowDropright} from "react-icons/io";

const Overview = () => {
    const {id} = useParams();
    return (
        <>
            <div className="flex flex-col md:flex-row ">
                <div className="w-full shadow-xl">
                    <h2 className="font-semibold text-lg md:text-xl my-4" >About this Place</h2>
                    <div>
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center gap-2 text-zomato-400">see all menu  <IoMdArrowDropright/></span>
                       
                        </Link>
                    </div>
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:block md:w-2/5 sticky top-2 bg-white p-3 shadow-xl">

                </aside>

            </div>
        </>
    )
}

export default Overview
