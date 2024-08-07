const { Router } = require("express");
const routes = Router();
const verifyToken = require("../middlewares/verifyToken");

routes.use("/auth", require("../controllers/authController"));
routes.use(
  "/employees",
  verifyToken,
  require("../controllers/employeesController")
);
routes.use(
  "/evaluations",
  verifyToken,
  require("../controllers/evaluationsController")
);
routes.use(
  "/questions",
  verifyToken,
  require("../controllers/questionsController")
);

routes.use("/reports", require("../controllers/reportsController"));

module.exports = routes;
