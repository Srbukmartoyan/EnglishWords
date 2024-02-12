import mongoose from "mongoose";
import wordsData from '../wordsShop.json' assert { type: 'json' };
import BusinessWord from '../models/words.js';

mongoose.connect('mongodb://localhost:27017/EnglishWords', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// async function saveLearningPathsToDB() { // data is already saved in database, no need to save again
//     try {
//       for (const wordData of wordsData) {
//         const word = new BusinessWord(wordData);
//         await word.save();
//       }
  
//       console.log('words saved successfully.');
//     } catch (error) {
//       console.error('Error saving words:', error.message);
//     } finally {
//       mongoose.disconnect(); 
//     }
//   }
  

// saveLearningPathsToDB();