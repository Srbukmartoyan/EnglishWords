import BusinessWord from "../models/words.js";

class WordsShop {
    static async getAllWords() {
        try {
            const words = await BusinessWord.find();
            return words;
        } catch (error) {
            console.error("Error fetching words:", error.message);
            throw error;
        }
    }
    static async deleteWord(word) {
        try {
            const deletedWord = await BusinessWord.findOneAndDelete({ word });
            return deletedWord;
        } catch (error) {
            console.error("Error deleting word:", error.message);
            throw error;
        }
    }
    static async getWordDefinition(word) {
        try {
            const wordData = await BusinessWord.findOne({ word });
            return wordData ? wordData.definition : null;
          } catch (error) {
            console.error('Error fetching word definition:', error);
            throw error;
          }
    }
}

export default WordsShop;
