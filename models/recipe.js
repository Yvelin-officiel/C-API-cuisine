const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: String, required: true }
        }
    ],
    steps: [{ type: String, required: true }],
    cooking_time: { type: String, required: true },
    servings: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    difficulty: { type: String, required: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
