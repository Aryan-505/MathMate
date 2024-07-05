// src/pages/AdditionPage.js
import { useNavigate } from 'react-router-dom';
import './styles/Addition.css';
function SubtractionPage() {
  const navigate = useNavigate();

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const goToDragDropAdd = () => {
    speak('Welcome to Drag Drop Subtract');
    // Use navigate('/dragDropAdd') to navigate to DragDropAdd Page
    navigate('/dragDropSub');
  };

  const goToSimpleAdd = () => {
    speak('Welcome to Simple Add');
    // Use navigate('/simpleAdd') to navigate to SimpleAdd Page
    navigate('/simpleSub');
  };

  return (
    <div>
      <header className='header'>
      <h1 className='head'>Subtraction Page</h1>
      </header>
    <div className="Addition">
      
      <div className="container">
      <button className="button btn btn-primary mx-4" onClick={goToDragDropAdd}>
        DragDropSub
      </button>
      <button className="button btn btn-secondary mx-4" onClick={goToSimpleAdd}>
        SimpleSub
      </button>
      </div>
    </div>
    </div>
  );
}

export default SubtractionPage;
