// src/MathLogic.js
const handleMathGameClick = (operation) => {
    switch (operation) {
      case 'addition':
        return 'Let\'s practice addition!';
      case 'subtraction':
        return 'Let\'s practice subtraction!';
      case 'multiplication':
        return 'Let\'s practice multiplication!';
      case 'division':
        return 'Let\'s practice division!';
      default:
        return '';
    }
  };
  
  export { handleMathGameClick };
  