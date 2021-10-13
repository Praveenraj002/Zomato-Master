import React from 'react'
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";



//components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';


const OrderOnline = () => {
    return (
        <>
         <div className="w-full flex  ">
             <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                < MenuListContainer/>
                < MenuListContainer/>

             </aside>
             <div className="w-full px-3 md:w-3/4">
                <div className="pl-3 mb-4">
                     <h2 className="text-xl font-semibold"> Order Online</h2>
                 <h4 className="flex items-center gap-2 font-light text-gray-500">
                     <AiOutlineCompass/> Live Track Your Order | <BiTimeFive/> 45 min
                 </h4>
                </div>
                 <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                     <FoodList title="Recommended" 
                     items={[
                         {image:"https://b.zmtcdn.com/data/dish_photos/a67/fa0650eb9d54a2fe3ed5fa81e501ca67.jpg?output-format=webp", price:"220", rating:"3",description:"Succulent bone-in chicken pieces cooked in rich spices and steeped in seeraga samba rice and cooked to perfection! From Kongu Nadu with love"},
                         ]}  />
                            <FoodList title="Tandoori" 
                     items={[
                         {image:"https://b.zmtcdn.com/data/dish_photos/a67/fa0650eb9d54a2fe3ed5fa81e501ca67.jpg?output-format=webp", price:"180", rating:"3",description:"Succulent bone-in chicken pieces cooked in rich spices and steeped in seeraga samba rice and cooked to perfection! From Kongu Nadu with love"},
                         ]}  />
                     
                    
                 </section>
                 </div>    
        </div>  
         <FloatMenuBtn/> 
        </>
    )
}

export default OrderOnline;


// this is Killing me!!
