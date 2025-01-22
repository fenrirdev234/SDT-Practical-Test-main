const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  costCode: {
    type: String,
    trim: true,
    required: true,
  },
  issueId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.mongo.ObjectId(),
    required: true,
  },
  images: [
    {
      url: {
        type: String, // URL of the image
        required: true,
      },
      key: {
        type: String,
        required: true,
      },
      fileType: {
        type: String,
        required: true,
      },
      fileName: {
        type: String,
        required: true,
      },
    },
  ],
});

reportSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.issueId = returnedObject.issueId.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
