const express = require("express");

const ReportsController = require("../controller/reportController");

const reportRouter = express.Router();

reportRouter.get("/", ReportsController.ReadAllReportsController);
reportRouter.post("/", ReportsController.CreateReportsController);

module.exports = reportRouter;
