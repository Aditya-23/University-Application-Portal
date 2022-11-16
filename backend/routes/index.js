//Import all the routes here
import StudentRoutes from "./StudentRoutes.js";

const mainRouter = (app) => {
    //write all your imported routes here
    app.use("/students", StudentRoutes);
}
export default mainRouter;