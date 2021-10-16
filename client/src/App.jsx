import { Route, Redirect } from "react-router-dom";

//HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import  RestaurantLayoutHOC from "./HOC/Restaurtant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.Hoc";

//component
import Temp from "./Components/temp";

//pages
import Home from "./Page/Home";
import Overview from "./Page/Restauant/Overview";
import OrderOnline from "./Page/Restauant/OrderOnline";
import Reviews from "./Page/Restauant/Reviews";
import Menu from "./Page/Restauant/Menu";
import Photos from "./Page/Restauant/Photos";
import Checkout from "./Page/Checkout";
import RedirectRestaurant from "./Page/Restauant/Redirect";

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery"/>
    </Route>
    <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
    <HomeLayoutHOC path="/:type" exact component={Home} />
    <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp}/>
    <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Overview}/>
    <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={OrderOnline}/>
    <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={ Menu }/>
    <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Reviews}/>
    <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={ Photos}/>

    <CheckoutLayoutHOC  path="/checkout/orders" exact component={Checkout}/>
    </>
  );
}

export default App;
