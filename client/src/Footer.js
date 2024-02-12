import React from 'react';
import axios from 'axios';
import './styles/footer.css';

const Footer = ({ onClearCompleted }) => {
  const handleClearCompleted = async () => {
    try {
      await axios.delete('/clear-completed');
      onClearCompleted();
    } catch (error) {
      console.error('Error clearing completed words:', error);
    }
  };

  return (
    <div>
      <button className="clear-button" onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default Footer;
