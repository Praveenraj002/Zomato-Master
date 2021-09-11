import React, {useState} from "react";

//components
import Deliverycarousel from "./Deliverycarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id:"123456",
            photos:["https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"],
            name:"RR Anbu Briyani",
            cuisine: ["Biryani", "Chinese"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery:47,
            RestaurantReviewValue: 4.1,
        },
        {
            _id:"123456-2",
            photos:["https://b.zmtcdn.com/data/dish_photos/bf5/a582280010d84ddc28abd0772c46ebf5.jpg"],
            name:"Domino's Pizza",
            cuisine: ["Pizza", "Fast Food", "Desserts", "Beverages"],
            averageCost: 150,
            isPro: true,
            isOff: 80,
            durationOfDelivery:30,
            RestaurantReviewValue: 4.2,
        },
        {
            _id:"123456-3",
            photos:["https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png"],
            name:"McDonald's",
            cuisine: ["Burger", "Fast Food", "Beverages"],
            averageCost: 250,
            isPro: true,
            isOff: 50,
            durationOfDelivery:31,
            RestaurantReviewValue: 4.0,
        },

    ])
    return (
        <>
       <Deliverycarousel />
      {/* <Brand /> */}
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Saidapet
      </h1>
      <div className="flex justify-between flex-wrap">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            {...restaurant}
            key={restaurant._id}
            whereIsthisres="asf"
          />
        ))}
      </div>
    </>
  );
};

export default Delivery;