// packages || dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { join } = require("path");
const mongoose = require("mongoose");

const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");

// dotenv config
require("dotenv").config();

// require routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

// app
const app = express();

// setting up the database connection and server controller
const startServer = async () => {
  await mongoose
    .connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    .then(() => {
      console.log("Connected to MongoDB!");
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// middlewares
app.use(morgan("dev"));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(join(__dirname, "/uploads")));

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use("/api", authRoutes);
app.use("/api", postRoutes);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.get("/", (req, res) => {
  res.status(200).send({ message: "APIs CREATED BY CODEGEEK" });
});

// server port config
const PORT = process.env.PORT || 8000;

// start the server
startServer();
