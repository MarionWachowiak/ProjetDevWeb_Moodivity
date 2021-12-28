const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema({
  nameMood: String,
})

const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;