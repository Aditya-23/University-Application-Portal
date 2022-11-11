import cors from "cors";
import express from "express";
import MongoConnect from "./config/mongodb.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
MongoConnect();

routes(app);

app.listen(8000, () => {
    console.log("App is running on 8000")
});