// index.js
const express = require("express");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const routes = require("./src/routes/index");
const connectDB = require("./src/config/db");
const limiter = require("./src/config/rateLimit");
const options = require("./src/config/swaggerOptions");

require("dotenv").config();
const app = express();

connectDB();
const port = process.env.PORT || 3000;

//app.use(cors());
app.use(express.json());

app.use(mongoSanitize());

routes.use(limiter);

const swaggerOptions = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
