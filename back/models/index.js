const mongoose = require('mongoose');
module.exports.Todo = require("./shema/todo");

// MongoDB
mongoose.connect("mongodb://localhost/todo-list", {
    keepAlive: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set("debug", true);
mongoose.Promise = Promise;