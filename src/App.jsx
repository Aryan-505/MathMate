// src/App.js

import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AdditionPage from './pages/AdditionPage';
import SubtractionPage from './pages/SubtractionPage';
import MultiplicationPage from './pages/MultiplicationPage';
import DivisionPage from './pages/DivisionPage';
import DragDropAdd from './pages/DragDropAdd';
import SimpleAdd from './pages/SimpleAdd';
import DragDropSub from './pages/DragDropSub';
import SimpleSub from './pages/SimpleSub';
import MultiRain from './pages/MultiRain';
import DivRain from './pages/DivRain';
import SimpleMulti from './pages/SimpleMulti';
import SimpleDiv from './pages/SimpleDiv';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Statement from './pages/StatementPage';
// import from 'react-bootstrap';
import './App.css';

function App() {
  const [showMathButtons, setShowMathButtons] = useState(true);
  const [isBackgroundColorChanged, setIsBackgroundColorChanged] = useState(false);
  const fixedColor = 'lightblue'; // Replace with your desired fixed color

  const handleBackgroundColorChange = () => {
    setIsBackgroundColorChanged((prevValue) => !prevValue);
    document.body.style.backgroundImage = isBackgroundColorChanged ? '' : 'none';
    // var alter=document.getElementsByClassName('cool-style');
    // alter.style.backgroundImage='';
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        {showMathButtons && (
          <header className="App-header">
            <h1>Welcome to MathMate</h1>
            {/* <p>Your user-friendly and inclusive platform for learning mathematics.</p> */}
          </header>
        )}
        <main style={{ backgroundColor: isBackgroundColorChanged ? fixedColor : '' }}>
          <div className="container">
            {/* Conditionally render math buttons based on state */}
            {showMathButtons && (
              <>
                <Link
                  to="/addition"
                  className="btn btn-primary mx-4"
                  onClick={() => setShowMathButtons(false)}
                >
                  Addition
                </Link>
                <Link
                  to="/subtraction"
                  className="btn btn-secondary mx-4"
                  onClick={() => setShowMathButtons(false)}
                >
                  Subtraction
                </Link>
                <Link
                  to="/multiplication"
                  className="btn btn-success mx-4"
                  onClick={() => setShowMathButtons(false)}
                >
                  Multiplication
                </Link>
                <Link
                  to="/division"
                  className="btn btn-danger mx-4"
                  onClick={() => setShowMathButtons(false)}
                >
                  Division
                </Link>
                <Link
                  to="/statement"
                  className="btn btn-danger mx-4"
                  onClick={() => setShowMathButtons(false)}
                >
                  Statement
                </Link>
              </>
            )}
          </div>
          <Routes>
            <Route path="/addition" element={<AdditionPage />} />
            <Route path="/subtraction" element={<SubtractionPage />} />
            <Route path="/multiplication" element={<MultiplicationPage />} />
            <Route path="/division" element={<DivisionPage />} />
            <Route path="/dragDropAdd" element={<DragDropAdd isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route
              path="/simpleAdd"
              element={<SimpleAdd isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange} />}
            />
            <Route path="/dragDropSub" element={<DragDropSub isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route path="/simpleSub" element={<SimpleSub isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route path="/MultiRain" element={<MultiRain isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route path="/DivRain" element={<DivRain isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route path="/simpleMulti" element={<SimpleMulti isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route path="/simpleDiv" element={<SimpleDiv isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
            <Route path="/statement" element={<Statement isBackgroundColorChanged={isBackgroundColorChanged} handleBackgroundColorChange={handleBackgroundColorChange}/>} />
          </Routes>
        </main>
        <footer className="App-footer">
          <div className="footer-content">
            {!showMathButtons && (
              <>
                <Link
                  to="/"
                  className="btn btn-primary mx-4"
                  onClick={() => setShowMathButtons(true)}
                >
                  Back
                </Link>
                <button
                  className="btn btn-warning mx-4 switch"
                  onClick={handleBackgroundColorChange}
                >
                  {isBackgroundColorChanged ? 'Restore Normal Color' : 'Change Background Color'}
                </button>
              </>
            )}
            {showMathButtons&&(<p className='footer-text'> </p>)}
            
          </div>
        </footer>


      </Router>
    </DndProvider>
  );
}

export default App;
