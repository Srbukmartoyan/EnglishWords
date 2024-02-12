import mongoose from 'mongoose';

const businessWordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const BucketWord = mongoose.model('BucketWord', businessWordSchema);

export default BucketWord;
