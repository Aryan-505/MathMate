// src/pages/AdditionPage.js
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './styles/Addition.css';

function AdditionPage() {
  const navigate = useNavigate();
  const [voices, setVoices] = useState([]);
  const [selectedLang] = useState('en-US');

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Load voices and listen for changes
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLang;
    const selectedVoice = voices.find(voice => voice.lang === selectedLang);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const goToDragDropAdd = () => {
    speak('Welcome to Drag Drop Add');
    navigate('/dragDropAdd');
  };

  const goToSimpleAdd = () => {
    speak('Welcome to Simple Addition');
    navigate('/simpleAdd');
  };
  return (
    <div>
      <header className='header'>
        <h1 className='head'>Addition Page</h1>
      </header>
      <div className="Addition">
        <div className="container">
          <button className="button btn btn-primary mx-4" onClick={goToDragDropAdd}>
            DragDropAdd
          </button>
          <button className="button btn btn-secondary mx-4" onClick={goToSimpleAdd}>
            SimpleAdd 
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdditionPage;
