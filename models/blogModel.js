const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    summary: {
        type: String
    }
});

const BlogModel = mongoose.model("Blog", BlogSchema);
module.exports = BlogModel;
