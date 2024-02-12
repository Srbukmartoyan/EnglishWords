import React from 'react';
import WordItem from "./WordItem.js"
const WordList = ({ words, onDelete, onUpdateStatus }) => {
    return (
      <div className='word-list'>
        {words.map(word => (
          <WordItem
            key={word._id}
            word={word}
            onDelete={onDelete}
            onUpdateStatus={onUpdateStatus}
          />
        ))}
      </div>
    );
  };
  
  export default WordList;