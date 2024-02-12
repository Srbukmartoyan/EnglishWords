import wordsBucketService from "../service/wordsBucketService.js"

class WordController {
  static async getAllWords(req, res) {
    try {
      const words = await wordsBucketService.getAllWords();
      res.status(200).json(words);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addWord(req, res) {
    const { word } = req.body;
    try {
      const newWord = await wordsBucketService.addWord({ word });
      res.status(201).json(newWord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteWord(req, res) {
    const { id } = req.params;
    try {
      await wordsBucketService.deleteWord(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateWordStatus(req, res) {
    const { id } = req.params;
    try {
      await wordsBucketService.updateWordStatus(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async clearCompletedWords(req, res) {
    try {
      await wordsBucketService.clearCompletedWords();
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default WordController;
