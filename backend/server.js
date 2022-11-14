import cors from "cors";
import express from "express";
import {MongoConnect} from "./config/mongodb.js";
import routes from "./routes/index.js";
import config from "config";

const app = express();
const PORT = config.get("port");

app.use(express.json());
app.use(cors());
MongoConnect();

routes(app);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
});