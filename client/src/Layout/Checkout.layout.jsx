import React from 'react'

//components
import Navbar from '../Components/Navbar/checkoutNavbar';

const CheckoutLayout = (props) => {
    return (
        <>
            <div>
                <Navbar/>
                <div className="container mx-ato px-4 lg:px-20">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default CheckoutLayout;
