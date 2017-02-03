var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
		uploadDate: Date,
		username: String,
		body: String
});

module.exports = mongoose.model('messages' /*THIS SHOULD BE THE COLLECTION NAME*/, messageSchema);
