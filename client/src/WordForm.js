import React, { useState } from 'react';
import axios from 'axios';
import './styles/wordForm.css';

const WordForm = ({ onAddWord }) => {
  const [newWord, setNewWord] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newWord.trim() !== '') {
      try {
        const response = await axios.post('/words', { word: newWord.trim() });
        onAddWord(response.data);
        setNewWord('');
      } catch (error) {
        console.error('Error adding word:', error);
      }
    }
  };

  return (
    <form className="word-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <button className="add-button" type="submit">Add</button>
    </form>
  );
};

export default WordForm;
