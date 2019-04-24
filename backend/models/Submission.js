const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  complaint: {
    type: String,
  },
});

module.exports = mongoose.model('submission', UserSchema);
