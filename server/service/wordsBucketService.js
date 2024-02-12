import BucketWord from "../models/wordsBucket.js";

class BucketWords {
    static async getAllWords() {
      try {
        const words = await BucketWord.find();
        return words;
      } catch (error) {
        throw error;
      }
    }
  
    static async addWord(newWord) {
      try {
        const word = new BucketWord(newWord);
        await word.save();
        return word;
      } catch (error) {
        throw error;
      }
    }
  
    static async deleteWord(wordId) {
      try {
        await BucketWord.findByIdAndDelete(wordId);
      } catch (error) {
        throw error;
      }
    }
  
    static async updateWordStatus(wordId) {
        try {
          const word = await BucketWord.findById(wordId);
          if (!word) {
            throw new Error('Word not found');
          }
          word.completed = !word.completed;
          await word.save();
          
        } catch (error) {
          throw error;
        }
      }
  
    static async clearCompletedWords() {
      try {
        await BucketWord.deleteMany({ completed: true });
      } catch (error) {
        throw error;
      }
    }
  }
  
  export default BucketWords;