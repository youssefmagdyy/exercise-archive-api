import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
    name: String,
    link: String,
    author: String,
    tags: [String]
    

});

const exercise = mongoose.model('exercise',exerciseSchema);
export default exercise;    