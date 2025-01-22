const Report = require("../model/internal/Report");

const CreateReportServices = (data) => {
  return Report.insertMany(data);
};

const ReadAllReportsServices = () => {
  return Report.find({});
};

module.exports.CreateReportServices = CreateReportServices;

module.exports.ReadAllReportsServices = ReadAllReportsServices;
