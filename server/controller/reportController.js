const ReportServices = require("../services/reportServices");

const CreateReportsController = (req, res, next) => {
  const body = req.body;
  ReportServices.CreateReportServices(body)
    .then((report) => {
      if (report) {
        res.json(report);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
};

module.exports.CreateReportsController = CreateReportsController;

const ReadAllReportsController = (req, res, next) => {
  ReportServices.ReadAllReportsServices()
    .then((report) => {
      if (report) {
        res.json(report);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
};
module.exports.ReadAllReportsController = ReadAllReportsController;
