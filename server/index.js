// Importing Env Variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";


//microservices Routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food"
import Menu from "./API/menu";
import Image from "./API/Image"
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";
import MailService from "./API/Mail";

//database Connection
import ConnectDB from "./database/connection";

const zomato = express();

//application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

//passport config
googleAuthConfig(passport);
routeConfig(passport);

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/mail", MailService);

zomato.get("/", (req, res) => res.json({ message: "setup success"}));

zomato.listen(4000, () => 
ConnectDB()
.then(() => console.log("Server is Alive :)"))
.catch(() => console.log("Server is Running, but Database Connection Failed")) );