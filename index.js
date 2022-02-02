// packages || dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// dotenv config
require("dotenv").config();

// require routes
const authRoutes = require("./routes/auth");

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
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes middleware
app.use("/api", authRoutes);

// server port config
const PORT = process.env.PORT || 8000;

// start the server
startServer();
