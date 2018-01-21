const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManagerCredentialSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const ManagerCredential = mongoose.model('ManagerCredential', ManagerCredentialSchema);

module.exports = ManagerCredential;