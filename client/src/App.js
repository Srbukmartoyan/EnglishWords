import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WordList from './WordList';
import WordForm from './WordForm';
import Footer from './Footer';
import './styles/shop.css';
import './styles/bucket.css';

function App() {
  const [words, setWords] = useState([]);
  const [wordsBucket, setWordsBucket] = useState([]);
  const [showWords, setShowWords] = useState(false);
  const [definition, setDefinition] = useState(null);


  useEffect(() => {
    fetchWordsBucket();
  }, []);

  const fetchWords = () => {
    axios.get('/business-words')
      .then(response => setWords(response.data.map(word => word.word)))
      .catch(error => console.error('Error fetching words:', error));
    setShowWords(!showWords);
  };
  const fetchWordsBucket = () => {
    axios.get('/words')
      .then(response => setWordsBucket(response.data))
      .catch(error => console.error('Error fetching words for Words Bucket:', error));
  };

  const handleAddWord = async (newWord) => {
    setWordsBucket([...wordsBucket, newWord]);
    const existingWord = words.find(word => word === newWord.word);
    if (existingWord) {
      try {
        await axios.delete(`/business-words/${existingWord}`);
      } catch (error) {
        console.error('Error deleting word from businessWords:', error);
      }
      setWords(words.filter(word => word !== existingWord));
    }
  };

  const handleDeleteWord = (wordId) => {
    setWordsBucket(wordsBucket.filter(word => word._id !== wordId));
  };

  const handleUpdateStatus = (wordId) => {
    setWordsBucket(wordsBucket.map(word => (word._id === wordId ? { ...word, completed: !word.completed } : word)));
  };

  const handleClearCompleted = () => {
    setWordsBucket(wordsBucket.filter(word => !word.completed));
  };

  const handleWordButtonClick = async (word) => {
    try {
      const fetchedDefinition = await getWordDefinition(word);
      setDefinition(fetchedDefinition);
    } catch (error) {
      console.error('Error fetching word definition:', error);
    }
  };

  const getWordDefinition = async (word) => {
    try {
      const response = await axios.get(`/business-words/definition/${word}`);
      return `${word} : ` + response.data.definition;
    } catch (error) {
      console.error('Error fetching word definition:', error);
      throw error;
    }
  };


  return (
    <div className="App">
      <div className='wordsShop'>
        <h1>Words Shop</h1>
        <button className="show-Words-Btn" onClick={fetchWords}>
          {showWords ? 'Close Words' : 'See Words'}
        </button>
        {showWords && words.length === 0 ? (
          <p>No words found</p>
        ) : showWords && (
          <div>
            <ul className='words'>
              {words.map((word, index) => (
                <li key={index}>
                  ▪️ {word}
                  <button className="word-btn" onClick={() => handleWordButtonClick(word)}>See Definition</button>
                </li>
              ))}
            </ul>
            {definition && (
              <div className='definition'>
                <h3>Definition: </h3>
                <p>{definition}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className='wordsBucket'>
        <div>
          <h1>Words Bucket</h1>
            <WordForm onAddWord={handleAddWord} />
            <WordList
              words={wordsBucket}
              onDelete={handleDeleteWord}
              onUpdateStatus={handleUpdateStatus}
            />
        </div>
        <Footer onClearCompleted={handleClearCompleted} />
      </div>
    </div>
  );
}

export default App;
