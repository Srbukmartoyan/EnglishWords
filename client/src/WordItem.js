import React from 'react';
import axios from 'axios';
import './styles/wordItem.css'; 
const WordItem = ({ word, onDelete, onUpdateStatus }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/words/${word._id}`);
      onDelete(word._id);
    } catch (error) {
      console.error('Error deleting word:', error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      await axios.put(`/words/${word._id}`, { completed: !word.completed });
      onUpdateStatus(word._id);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="word-item">
      <div>
      <input
        type="checkbox"
        checked={word.completed}
        onChange={handleUpdateStatus}
      />
      <span style={{ textDecoration: word.completed ? 'line-through' : 'none' }}>
        {word.word}
      </span>
      </div>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
   
    </div>
  );
};

export default WordItem;
