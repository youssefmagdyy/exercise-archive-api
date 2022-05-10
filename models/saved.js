import mongoose from "mongoose";

const savedSchema = mongoose.Schema({

});

const saved = mongoose.model('saved',savedSchema);
export default saved;    