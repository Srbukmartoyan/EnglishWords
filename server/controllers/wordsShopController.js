import wordsShopService from "../service/wordsShopService.js"

const wordsController = {
    getAllWords: async (req, res) => {
        try {
            const words = await wordsShopService.getAllWords();

            if (!words || words.length === 0) {
                res.status(404).json({ message: 'No words found' });
            } else {
                res.status(200).json(words);
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteWord: async (req, res) => {
        const { word } = req.params;
        try {
            const deletedWord = await wordsShopService.deleteWord(word);
            if (!deletedWord) {
                return res.status(404).json({ message: 'Word not found' });
            }
            res.status(200).json({ message: 'Word deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getWordDefinition: async (req, res) => {
        const { word } = req.params;
        try {
          const definition = await wordsShopService.getWordDefinition(word);
          if (!definition) {
            return res.status(404).json({ message: 'Word not found' });
          }
          res.status(200).json({ definition });
        } catch (error) {
          console.error('Error fetching word definition:', error);
          res.status(500).json({ error: error.message });
        }
      },
};

export default wordsController;