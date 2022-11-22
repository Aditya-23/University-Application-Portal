//Import all the routes here
import StudentRoutes from "./StudentRoutes.js";
import UniversityAdminRoutes from "./UniversityAdmin.route.js";

const mainRouter = (app) => {
  //write all your imported routes here
  app.use("/students", StudentRoutes);
  app.use("/universityAdmins", UniversityAdminRoutes);
};
export default mainRouter;
