const mongoose = require("mongoose");

const userFeedbackSchema = mongoose.Schema({
  feedback: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const UserFeedbackModel = mongoose.model("userfeedback", userFeedbackSchema);

module.exports = {
  UserFeedbackModel,
};
