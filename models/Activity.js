const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  nameActivity: String,
  type: String,
  peopleNumber: Number,
  place: String,
  city: String,
  mood: String,
  description: String,
  image: String,
})

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;