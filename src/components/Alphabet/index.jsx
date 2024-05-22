import React, { useState } from 'react';
import './alphabet.css';
import Letter from '../Alphabet/Letter';

const Alphabet = () => {
  const [string, setstring] = useState('');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleClick = (letter) => {
    let newString = string + letter;
    const regex = /(.)\1{2,}/g;
    newString = newString.replace(regex, (match) => '_'.repeat(match.length));
    setstring(newString);
  };

  return (
    <div className="App">
      <div className="grid">
        {letters.map((letter) => (
          <Letter
            key={letter}
            letter={letter}
            onClick={() => handleClick(letter)}
          />
        ))}
      </div>
      <div className="string">{string}</div>
    </div>
  );
};

export default Alphabet;
