import React, {useState} from 'react'
import Rating from "react-rating-stars-component";

//components
import ReviewModal from './ReiewModal';

const AddReviewCard = () => {

     const [isOpen, setIsOpen] = useState(false);

        const openModal = () => setIsOpen(true);

    return (
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
              <h3 className="">Rate Your Experience for</h3>
          <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
            <input type="radio" name="review" id="dinning"/>
                <label htmlFor="dinning">Dinning</label>

            </div>
             <div className="flex items-center gap-2">
            <input type="radio" name="review" id="delivery"/>
                <label htmlFor="delivery">Delivery</label>

            </div>
           
          </div>
            <button onClick ={openModal} className="text-zomato-400">
                Write a Review
            </button>
        </>   
    )
}

export default AddReviewCard;
