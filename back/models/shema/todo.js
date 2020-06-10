const mongoose = require('mongoose');

const todoShema = new mongoose.Schema({
    task : {
        type: String,
        unique: true,
        required: true
    },

    completed : {
        type: Boolean,
        default: false,
    }
});

const todoModel = mongoose.model("Todo",todoShema);

// Export
module.exports = todoModel;