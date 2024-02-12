import mongoose from "mongoose";

const businessWordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    definition: { type: String, required: true },
    completed: { type: Boolean, default: false }
});
  
const BusinessWord = mongoose.model('BusinessWord', businessWordSchema);

export default BusinessWord;