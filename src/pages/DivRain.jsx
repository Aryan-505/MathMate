import React, { useState, useEffect } from 'react';
import './styles/MultiRain.css';

function DivRain({ isBackgroundColorChanged, handleBackgroundColorChange }) {
  const [score, setScore] = useState(0);
  const [equations, setEquations] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(null);
  const [language, setLanguage] = useState('english'); // Initial language

  const languages = {
    english: {
      answer: 'Your Answer',
      scoreText: 'Score',
      lang:'Language',
      heading:'Division Rain'
      // Add more language-specific content as needed
    },
    hindi: {
      answer: 'तुम्हारा जवाब',
      submitButton: 'प्रस्तुत',
      scoreText: 'स्कोर',
      lang:'भाषा',
      heading:'विभाजन बारिश'
      // Add more language-specific content as needed
    },
    bengali: {
      answer: 'তোমার উত্তর',
      submitButton: 'জমা দিন',
      scoreText: 'স্কোর',
      lang:'ভাষা',
      heading:'বিভাজন বৃষ্টি'
    }
  };
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const containerStyle = {
    backgroundImage: 'url("https://cdn.wallpapersafari.com/59/52/0kjwKe.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height as needed
    // Add other styles as needed
  };
  const container = {
    // backgroundImage: 'url("https://cdn.wallpapersafari.com/59/52/0kjwKe.jpg")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // height: '100vh', // Set the height as needed
    // Add other styles as needed
    // border: 'solid black'
    color:'black'
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      generateNewEquation();
      resetTimer();
    }, 10000);

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleAnswer();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    const generateNewEquation = () => {
      const newEquation = generateEquation(0); // Always start from row 0
      setEquations([newEquation]);
      startTimer();
    };

    const generateEquation = (fixedRow) => {
      const num2 = Math.floor(Math.random() * 10) + 1;
      const answer = Math.floor(Math.random() * 10) + 1;
      const num1 = num2 * answer;

      return {
        equation: `${num1} ÷ ${num2}`,
        answer,
        column: Math.floor(Math.random() * 10),
        row: fixedRow, // Fixed row to always start from the top
        startTime: Date.now(),
      };
    };

    const startTimer = () => {
      setTimer(setTimeout(() => handleAnswer(), 10000)); // Set a 10-second time limit
    };

    const resetTimer = () => {
      clearTimeout(timer);
      setTimer(null);
    };

    const handleAnswer = () => {
      const currentEquation = equations[0];
    
    
      if (parseInt(userAnswer, 10) === currentEquation.answer) {
        const elapsedTime = Date.now() - currentEquation.startTime;
        const maxScore = 10;
        const baseScore = Math.max(maxScore - Math.floor(elapsedTime / 1000), 0);
        setScore(score + baseScore);
      } else {
        setScore(Math.max(score - 5, 0));
      }
    
      setUserAnswer('');
      generateNewEquation();
    };

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearInterval(intervalId);
      resetTimer();
    };
  }, [equations, userAnswer, score, timer]);
  const languageContent = languages[language];
  return (
    <div className={`MultiRain container-style ${isBackgroundColorChanged ? 'background-changed' : ''} ${isBackgroundColorChanged ? 'cool-style-disabled' : 'cool-style'}`} style={isBackgroundColorChanged ? null : containerStyle} >
      <h1 style={container}>{languageContent.heading}</h1>
      <div className="dropdown settings1">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
         {languageContent.lang}
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => handleLanguageChange('english')}>English</button></li>
          <li><button className="dropdown-item" onClick={() => handleLanguageChange('hindi')}>Hindi</button></li>
          <li><button className="dropdown-item" onClick={() => handleLanguageChange('bengali')}>Bengali</button></li>
        </ul>
      </div>
      <div className="game-container" >
        {[...Array(10)].map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {[...Array(10)].map((_, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${colIndex === 9 ? 'last-column' : ''}`}
              >
                {equations
                  .filter((equation) => equation.row === rowIndex && equation.column === colIndex)
                  .map((equation, index) => (
                    <div key={index} className="equation">
                      {equation.equation}
                    </div>
                  ))}
              </div>
            ))}
            <div className="row-index">{10 - rowIndex}</div>
          </React.Fragment>
        ))}
      </div>
      <div className="score">{languageContent.scoreText}: {score}</div>
      <input
        type="number"
        placeholder="Your Answer"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
    </div>
  );
}

export default DivRain;
