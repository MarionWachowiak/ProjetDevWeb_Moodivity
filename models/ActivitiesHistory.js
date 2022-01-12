const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitieshistorySchema = new Schema({
  email: {
    unique: true,
    type: String
  },
  nameActivity: String,
  type: String,
  peopleNumber: Number,
  place: String,
  city: String,
  mood: String,
  description: String,
  image: String,
})

const ActivitiesHistory = mongoose.model('ActivitiesHistory', activitieshistorySchema);
module.exports = ActivitiesHistory;