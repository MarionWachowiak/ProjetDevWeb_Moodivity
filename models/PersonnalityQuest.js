const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personnalityquestSchema = new Schema({
  emailUser: {
    unique: true,
    type: String
  },
  personnality: String,
  outings: String,
  hobbies: String,
  interests: String,
  sport: String,
  cinemaseries: String,
  books: String,
  museum: String,
  activityplace: String,
  activitypeople: String,
  cooking: String,
  handicrafts: String,
})

const PersonnalityQuest = mongoose.model('PersonnalityQuest', personnalityquestSchema);
module.exports = PersonnalityQuest;