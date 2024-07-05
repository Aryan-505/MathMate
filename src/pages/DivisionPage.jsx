// src/pages/AdditionPage.js
import { useNavigate } from 'react-router-dom';
// import './styles/Multi.css';
function DivisionPage() {
  const navigate = useNavigate();

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const goToDragDropAdd = () => {
    speak('Welcome to Division Rain');
    // Use navigate('/dragDropAdd') to navigate to DragDropAdd Page
    navigate('/DivRain');
  };

  const goToSimpleAdd = () => {
    speak('Welcome to Simple Division');
    // Use navigate('/simpleAdd') to navigate to SimpleAdd Page
    navigate('/simpleDiv');
  };

  return (
    <div>
      <header className='header'>
      <h1 className='head'>Division Page</h1>
      </header>
    <div className="Addition">
      
      <div className="container">
      <button className="button btn btn-primary mx-4" onClick={goToDragDropAdd}>
        Division Rain 
      </button>
      <button className="button btn btn-secondary mx-4" onClick={goToSimpleAdd}>
        Simple Div
      </button>
      </div>
    </div>
    </div>
  );
}

export default DivisionPage;
