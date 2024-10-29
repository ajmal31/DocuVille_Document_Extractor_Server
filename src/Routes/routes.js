import controller from "../controller/controller.js";
const routes = (express) => {
  const router = express.Router();

  router.route("/upload").post(controller.upload)

  return router;
};

export default routes;
