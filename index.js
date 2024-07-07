import express from "express";
import userRouter from "./routes/user_route.js";
import { dbConnection } from "./config/db.js";

// create server
const app = express();

// database connecttion
dbConnection();

// apply middlewares
app.use(express.json());

// define routes
app.use(userRouter);

// listen for incoming requests
const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`App is listening on port ${port}`)
});
