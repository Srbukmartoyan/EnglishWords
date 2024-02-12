import express from 'express';
import WordsShopController from "../controllers/wordsShopController.js"

const router = express.Router();

router.get('/business-words', WordsShopController.getAllWords);
router.get('/business-words/definition/:word', WordsShopController.getWordDefinition);
router.delete('/business-words/:word', WordsShopController.deleteWord);

export default router;