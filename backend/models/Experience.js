const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  job: { type: String, required: true },
  year: { type: String, required: true },
});

module.exports = mongoose.model('Experience', ExperienceSchema);
