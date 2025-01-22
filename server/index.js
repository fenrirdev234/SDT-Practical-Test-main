require("dotenv").config();
const express = require("express");
const app = express();
("");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

const http = require("http");
const reportRouter = require("./route/reportRouter");
const unknownEndpoint = require("./middleware/unknownEndpoint");
const errorHandler = require("./middleware/errorHandler");

const PORT = 3001;

connectDB();

// // Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// home route
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

app.use("/report", reportRouter);

// unknownEndpoint and errorHandler  Middleware

app.use(unknownEndpoint);
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  const server = http.createServer(app);

  server.listen(PORT, () =>
    console.log(`Server running on port http://localhost:${PORT}`)
  );
});
