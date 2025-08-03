const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  lostitem: String,
  lostdatetime: Date,
  lostlocation: String,
  ownername: String,
  ownerphonenumber: String,
  lostdescription: String,
  matchStatus: {
  type: String,
  enum: ['pending', 'approved', 'rejected'],
  default: 'pending'
  },
  email: { type: String, required: true },
});

module.exports = mongoose.model('LostItem', lostItemSchema);
