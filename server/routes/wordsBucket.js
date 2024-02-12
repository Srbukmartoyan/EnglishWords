import express from 'express';
import BucketWordsController from "../controllers/bucketWordsController.js"

const router = express.Router();

router.get('/words', BucketWordsController.getAllWords);
router.post('/words', BucketWordsController.addWord);
router.delete('/words/:id', BucketWordsController.deleteWord);
router.put('/words/:id', BucketWordsController.updateWordStatus);
router.delete('/clear-completed', BucketWordsController.clearCompletedWords);

export default router;

