import express from 'express';
import mongoose from 'mongoose';
import './config/database.js';
import wordsShopRout from './routes/wordsShop.js';
import wordsBucketRout from './routes/wordsBucket.js';

const PORT = process.env.PORT || 3001;
const app = express();

const start = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/EnglishWords");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message);
    }
};

app.use(express.static('../client/build'));
app.use(express.json());
app.use('/', wordsShopRout);
app.use('/', wordsBucketRout);

start()
