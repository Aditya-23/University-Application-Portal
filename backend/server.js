import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

routes(app);

app.listen(8000, () => {
    console.log("App is running on 8000")
});