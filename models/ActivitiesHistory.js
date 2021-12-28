const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitieshistorySchema = new Schema({
  emailActivitiesHistory: String,
  activity1: String,
  activity2: String,
  activity3: String,
})

const ActivitiesHistory = mongoose.model('ActivitiesHistory', activitieshistorySchema);
module.exports = ActivitiesHistory;