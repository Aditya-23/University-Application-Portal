const cors = require("cors");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors);

app.listen(8000, () => {
    console.log("App is running on 8000")
});