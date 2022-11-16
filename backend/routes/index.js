//Import all the routes here
import StudentRoutes from "./StudentRoutes.js";

const mainRouter = (app) => {
    //write all your imported routes here
    app.use("/student", StudentRoutes);
}
export default mainRouter;