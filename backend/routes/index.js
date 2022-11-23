//Import all the routes here
import StudentRoutes from "./StudentRoutes.js";
import UniversityRoutes from "./UniversityRoutes.js";
import ProgramRoutes from "./program.route.js";

const mainRouter = (app) => {
  //write all your imported routes here
  app.use("/students", StudentRoutes);
  app.use("/universities", UniversityRoutes);
  app.use("/programs", ProgramRoutes);
};
export default mainRouter;
