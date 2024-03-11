const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    mark: [{ type: Number, required: true }],
    comment: [{ type: String, required: true }],
});

module.exports = mongoose.model('Comment', commentSchema);