const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: String,
  type: String,
  peopleNeeded: Number,
  place: String,
  city: String,
  mood: String,
  description: String,
})

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;