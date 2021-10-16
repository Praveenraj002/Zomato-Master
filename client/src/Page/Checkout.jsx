import React from 'react'
import {BsShieldLockFill} from "react-icons/bs";

//components
import FoodItem from '../Components/Cart/FoodItem';
import AddressList from '../Components/Checkout/AddressList';

const Checkout = () => {
    const address = [
        {
        name: "Home",
        address: "Chennai"
        },
           {
        name: "Office",
        address: "Banglore"
        },
           {
        name: "Gym",
        address: "Chennai"
        },
    ]
    return (
         <>
         <div className="my-3 flex flex-col gap-3 items-center">
             <h1 className="text-xl text-center md:text-2xl font-bold">Check Out</h1>
             <div className="w-full md:4/5  rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
                 <h3 className="text-lg font-semibold">Summary</h3>
                 <div className="flex w-full flex-col gap-2 items-center">
                     <h5 className="text-base tracking- wider">ORDER FROM</h5>
                     <div className="flex w-full flex-col items-center text-gray-400">
                         <h4>Junior Kuppana</h4>
                         <small>Nungambakkam, Chennai</small>
                     </div>
                     <div className="my-4 px-4 flex flex-col w-full  md:w-3/5 md:w-3/5">
                    <FoodItem name="Chicken Briyani Regular" quantity={2} price={220}/>
                    <FoodItem name="Chicken Briyani Regular" quantity={2} price={220}/>
                    <FoodItem name="Chicken Briyani Regular" quantity={2} price={220}/>
                     </div>
                    <div className="flex flex-col gap-3 w-full  md:w-3/5">
                        <h4 className="text-xl font-semibold text-center">Choose Address</h4>
                        <AddressList address={address}/> 
                    </div>
                
                 </div>
                      <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
                     Pay Securely <BsShieldLockFill/>
                 </button>
             </div>
         </div>
         </>
    )
}

export default Checkout;
