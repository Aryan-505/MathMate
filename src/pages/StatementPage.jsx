import { useState } from 'react';
import './styles/Statement.css';
import PropTypes from 'prop-types';
import { useEffect} from 'react';
// import { addition as additionArray, subtraction as subtractionArray, multiplication as multiplicationArray, division as divisionArray } from './ProblemStatements';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const StatementPage= ({ isBackgroundColorChanged }) =>{
  // Addition array
const additionArray = [
  "Maria bought ___ baskets of strawberries and ___ crates of oranges. How many fruits did Maria buy in total?",
  "A farmer has ___ apple trees and ___ pear trees in his orchard. How many fruits does the farmer harvest in total?",
  "Sara has ___ watermelons, and each watermelon weighs ___ kilograms. How many kilograms of fruit does Sara have in total?",
  "At a fruit stand, ___ customers bought ___ dozen bananas each. How many fruits were sold in total?",
  "In a fruit basket, there are ___ apples and ___ oranges. What is the total number of fruits?"
];
const additionArrayHindi = [
  "मरिया ने ___ बास्केट स्ट्रॉबेरी खरीदे और ___ क्रेट नारंगियों खरीदे। कुल में मरिया ने कितने फल खरीदे?",
  "एक किसान के पास ___ सेब के पेड़ हैं और ___ नाशपाती के पेड़ हैं। किसान कितने फलों की फसल का कटाव करता है?",
  "सारा के पास ___ तरबूज हैं, और प्रत्येक तरबूज ___ किलोग्राम का है। सारा के पास कुल कितने किलोग्राम फल हैं?",
  "एक फल की दुकान पर, ___ ग्राहकों ने प्रत्येक ___ डर्जन केले खरीदे। कुल में कितने फल बिके?",
  "एक फल की टोकरी में, ___ सेब और ___ संतरे हैं। कुल फलों की संख्या क्या है?"
];

// Bengali translation
const additionArrayBengali = [
  "মারিয়া ___ টি বাস্কেট স্ট্রবেরি কিনেন এবং ___ টি ক্রেট কমলা কিনেন। মারিয়া কত প্রজাতির ফল কিনেন?",
  "একজন কৃষকের অর্কার্ডে ___ টি আপেল গাছ এবং ___ টি নাসপাতি গাছ আছে। কৃষক মোট কত ফল তৈরি করে?",
  "সারা একটি ___ তরমুজ আছে, এবং প্রতি তরমুজ ___ কিলোগ্রাম ওজনের। সারার কত কিলোগ্রাম ফল আছে?",
  "একটি ফলের দোকানে, ___ গ্রাহক প্রত্যেক ___ ডজন কেলে কিনে। মোট কতগুলি ফল বিক্রি হয়েছে?",
  "একটি ফলের টোকরিতে, ___ আপেল এবং ___ কমলা রয়েছে। মোট ফলের সংখ্যা কত?"
];
// Subtraction array
const subtractionArray = [
  "Tom had ___ toys, and he gave away ___ toys. How many toys does he have left?",
  "There were ___ birds on the tree. ___ birds flew away. How many birds are still there?",
  "John had ___ candies, but he ate ___ candies. How many candies does he have left?",
  "Sally had ___ cookies, but she shared ___ cookies. How many cookies does she have left?",
  "There were ___ students in the class, but ___ students left. How many students are still in the class?"
];
// Subtraction array in Hindi
const subtractionArrayHindi = [
  "टॉम के पास ___ खिलौने थे, और उसने ___ खिलौने दिए। उसके पास अब कितने खिलौने बचे हैं?",
  "पेड़ पर ___ पक्षी थे। ___ पक्षी उड़ गए। अब कितने पक्षी बचे हैं?",
  "जॉन के पास ___ कैंडी थीं, लेकिन उसने ___ कैंडी खाई। उसके पास अब कितनी कैंडी बची है?",
  "सैली के पास ___ कुकीज़ थीं, लेकिन उसने ___ कुकीज़ बाँट दी। उसके पास अब कितनी कुकीज़ बची हैं?",
  "कक्षा में ___ छात्र थे, लेकिन ___ छात्र चले गए। अब कक्षा में कितने छात्र बचे हैं?"
];

// Subtraction array in Bengali
const subtractionArrayBengali = [
  "টমের কাছে ___ খেলনা ছিল, এবং তিনি ___ খেলনা দিয়েছিলেন। তার কাছে এখন কতগুলি খেলনা বাকি আছে?",
  "গাছে ___ পাখি ছিল। ___ পাখি উড়ে চলেগেছিল। এখন কতগুলি পাখি বাকি আছে?",
  "জনের কাছে ___ মিষ্টি ছিল, কিন্তু তিনি ___ মিষ্টি খেয়েছিলেন। তার কাছে এখন কতগুলি মিষ্টি বাকি আছে?",
  "স্যালির কাছে ___ বিস্কুট ছিল, কিন্তু তিনি ___ বিস্কুট ভাগ করে দিয়েছিলেন। তার কাছে এখন কতগুলি বিস্কুট বাকি আছে?",
  "ক্লাসে ___ ছাত্র ছিল, কিন্তু ___ ছাত্র ছেড়ে দিয়েছিলেন। এখন কতগুলি ছাত্র বাকি আছে?"
];

// Multiplication array
const multiplicationArray = [
  "There are ___ boxes, and each box contains ___ pens. How many pens are there in total?",
  "A farmer has ___ baskets. Each basket contains ___ apples. How many apples does the farmer have?",
  "A store has ___ shelves. Each shelf contains ___ books. How many books are there in total?",
  "There are ___ teams in a tournament, and each team has ___ players. How many players are there in total?",
  "There are ___ bags, and each bag contains ___ marbles. How many marbles are there in total?"
];
// Multiplication array in Hindi
const multiplicationArrayHindi = [
  "___ डिब्बे हैं, और प्रत्येक डिब्बे में ___ पेन्स हैं। कुल कितने पेन्स हैं?",
  "एक किसान के पास ___ टोकरियाँ हैं। प्रत्येक टोकरी में ___ सेब हैं। किसान के पास कुल कितने सेब हैं?",
  "एक दुकान में ___ अलमारियाँ हैं। प्रत्येक अलमारी में ___ किताबें हैं। कुल कितनी किताबें हैं?",
  "एक प्रतियोगिता में ___ टीमें हैं, और प्रत्येक टीम में ___ खिलाड़ी हैं। कुल कितने खिलाड़ी हैं?",
  "___ बस्ते हैं, और प्रत्येक बस्ते में ___ मार्बल्स हैं। कुल कितने मार्बल्स हैं?"
];

// Multiplication array in Bengali
const multiplicationArrayBengali = [
  "___ বাক্স আছে, এবং প্রতিটি বাক্সে ___ কলম আছে। মোট কতগুলি কলম আছে?",
  "একটি কৃষকের ___ টোকারি আছে। প্রতিটি টোকারিতে ___ আপেল আছে। কৃষকের কাছে মোট কতগুলি আপেল আছে?",
  "একটি দোকানে ___ সেলফ আছে। প্রতিটি সেলফে ___ বই আছে। মোট কতগুলি বই আছে?",
  "একটি টুর্নামেন্টে ___ দল আছে, এবং প্রতিটি দলে ___ খেলোয়াড় আছে। মোট কতগুলি খেলোয়াড় আছে?",
  "___ ব্যাগ আছে, এবং প্রতিটি ব্যাগে ___ মার্বেল আছে। মোট কতগুলি মার্বেল আছে?"
];

// Division array
const divisionArray = [
  "There are ___ cookies, and they are divided equally among ___ children. How many cookies does each child get?",
  "There are ___ chocolates, and they are shared equally among ___ friends. How many chocolates does each friend get?",
  "There are ___ candies, and each child receives ___ candies. How many children are there?",
  "There are ___ students, and they are divided into groups with ___ students in each group. How many groups are there?",
  "There are ___ apples, and they are arranged in baskets with ___ apples in each basket. How many baskets are there?"
];
// Division array in Hindi
const divisionArrayHindi = [
  "___ कुकीज़ हैं, और उन्हें ___ बच्चों के बीच बराबरी रूप से विभाजित किया गया है। प्रत्येक बच्चे को कितनी कुकीज़ मिलेगी?",
  "___ चॉकलेट हैं, और वे ___ दोस्तों के बीच बराबरी रूप से साझा की जाती हैं। प्रत्येक दोस्त को कितनी चॉकलेट मिलेगी?",
  "___ कैंडीज़ हैं, और प्रत्येक बच्चे को ___ कैंडीज़ मिलती हैं। कितने बच्चे हैं?",
  "___ छात्र हैं, और उन्हें ___ छात्रों के प्रत्येक समूह में विभाजित किया गया है। कितने समूह हैं?",
  "___ सेब हैं, और उन्हें प्रत्येक बास्केट में ___ सेब हैं। कितने बास्केट हैं?"
];

// Division array in Bengali
const divisionArrayBengali = [
  "___ বিস্কুট আছে, এবং তারা সমানভাবে ভাগ করা হয়েছে ___ শিশুদের মধ্যে। প্রতি শিশু পাবে কতগুলি বিস্কুট?",
  "___ চকলেট আছে, এবং তা সমানভাবে ভাগ করা হয়েছে ___ বন্ধুদের মধ্যে। প্রতি বন্ধু পাবে কতগুলি চকলেট?",
  "___ ক্যান্ডি আছে, এবং প্রতিটি শিশুকে দেওয়া হয় ___ ক্যান্ডি। কতগুলি শিশু আছে?",
  "___ ছাত্র আছে, এবং তারা ___ ছাত্রের প্রতি গ্রুপে ভাগ করা হয়েছে। কতগুলি গ্রুপ আছে?",
  "___ আপেল আছে, এবং তারা প্রতিটি বাস্কেটে সাজানো হয়েছে ___ আপেল। মোট কতটি বাস্কেট আছে?"
];

  const [displayedStatement, setDisplayedStatement] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [correctResult, setCorrectResult] = useState(null);
  const [language, setLanguage] = useState('english'); // Initial language
  const [voices, setVoices] = useState([]);
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Load voices and listen for changes
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);
  function stopSpeaking() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }
  
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    var selectedLang="en-US"
    if(language=="english")selectedLang="en-US";
    else if(language=="hindi")selectedLang="hi-IN";
    else selectedLang="bn-IN";
    utterance.lang = selectedLang;
    const selectedVoice = voices.find(voice => voice.lang === selectedLang);

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
  };
  const languages = {
    english: {
      font:'Font Size',
      submitButton: 'Submit',
      start:'Start',
      lang:'Language',
      // Add more language-specific content as needed
    },
    hindi: {
      font:'फ़ॉन्ट का आकार',
      submitButton: 'प्रस्तुत',
      lang:'भाषा',
      start:'शुरू'
      // Add more language-specific content as needed
    },
    bengali: {
      font:'ফন্ট সাইজ',
      submitButton: 'জমা দিন',
      lang:'ভাষা',
      start:'শুরু',
    }
    // Add more languages as needed
  };
  const [fontSize, setFontSize] = useState(50); // Initial font size
  const increaseFontSize = () => {
    if(fontSize<60)
    setFontSize(prevSize => prevSize + 4); // Increase font size by 4
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(12, prevSize - 4)); // Decrease font size by 4, minimum 12
  };
 const  handleLanguageChange = (selectedLanguage) => {
  stopSpeaking();
    setLanguage(selectedLanguage);
    const functions = Object.values(getLanguageFunctions(selectedLanguage));
    const randomFunction = functions[Math.floor(Math.random() * functions.length)];
    const { statement, result } = randomFunction();
    setDisplayedStatement(statement);
    setUserAnswer('');
    setFeedbackMessage('');
    setCorrectResult(result);
  };
  const containerStyle = {
    backgroundImage: 'url("https://webstockreview.net/images/morning-clipart-sunny-landscape-4.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height as needed
    // Add other styles as needed
  };
  function handleSubmit(e) {
    e.preventDefault();
    stopSpeaking();
    if (parseInt(userAnswer, 10) === correctResult) {
      setFeedbackMessage('Correct! Moving to the next question.');
      setTimeout(() => {
        start();
      }, 1000); // Move to the next question after 1 second
    } else {
      setFeedbackMessage('Incorrect! Try again.');
      setTimeout(() => {
        start();
      }, 1000); // Move to the next question after 1 second
    }
  }
  


  

  // Addition function
  function addition() {
    const index = getRandomNumber(0, additionArray.length);
    const statement = additionArray[index];
    const num1 = getRandomNumber(1, 11); // Adjust the range as needed
    const num2 = getRandomNumber(1, 11); // Adjust the range as needed
    const result = num1 + num2;
    return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
  }
// Addition function in Hindi
function additionHindi() {
  const index = getRandomNumber(0, additionArrayHindi.length);
  const statement = additionArrayHindi[index];
  const num1 = getRandomNumber(1, 11); // Adjust the range as needed
  const num2 = getRandomNumber(1, 11); // Adjust the range as needed
  const result = num1 + num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Addition function in Bengali
function additionBengali() {
  const index = getRandomNumber(0, additionArrayBengali.length);
  const statement = additionArrayBengali[index];
  const num1 = getRandomNumber(1, 11); // Adjust the range as needed
  const num2 = getRandomNumber(1, 11); // Adjust the range as needed
  const result = num1 + num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Similarly, define other functions for subtraction, multiplication, and division in Hindi and Bengali languages.

  // Subtraction function
  // Subtraction function
function subtraction() {
  const index = getRandomNumber(0, subtractionArray.length);
  const statement = subtractionArray[index];
  let num1 = getRandomNumber(1, 11); // Adjust the range as needed
  let num2 = getRandomNumber(1, 11); // Adjust the range as needed
  // Ensure num2 is less than or equal to num1
  while (num2 > num1) {
    num1 = getRandomNumber(1, 11);
    num2 = getRandomNumber(1, 11);
  }
  const result = num1 - num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Subtraction function in Hindi
function subtractionHindi() {
  const index = getRandomNumber(0, subtractionArrayHindi.length);
  const statement = subtractionArrayHindi[index];
  let num1 = getRandomNumber(1, 11); // Adjust the range as needed
  let num2 = getRandomNumber(1, 11); // Adjust the range as needed
  // Ensure num2 is less than or equal to num1
  while (num2 > num1) {
    num1 = getRandomNumber(1, 11);
    num2 = getRandomNumber(1, 11);
  }
  const result = num1 - num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Subtraction function in Bengali
function subtractionBengali() {
  const index = getRandomNumber(0, subtractionArrayBengali.length);
  const statement = subtractionArrayBengali[index];
  let num1 = getRandomNumber(1, 11); // Adjust the range as needed
  let num2 = getRandomNumber(1, 11); // Adjust the range as needed
  // Ensure num2 is less than or equal to num1
  while (num2 > num1) {
    num1 = getRandomNumber(1, 11);
    num2 = getRandomNumber(1, 11);
  }
  const result = num1 - num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

  // Multiplication function
function multiplication() {
  const index = getRandomNumber(0, multiplicationArray.length);
  const statement = multiplicationArray[index];
  const num1 = getRandomNumber(1, 11); // Adjust the range as needed
  const num2 = getRandomNumber(1, 11); // Adjust the range as needed
  const result = num1 * num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Multiplication function in Hindi
function multiplicationHindi() {
  const index = getRandomNumber(0, multiplicationArrayHindi.length);
  const statement = multiplicationArrayHindi[index];
  const num1 = getRandomNumber(1, 11); // Adjust the range as needed
  const num2 = getRandomNumber(1, 11); // Adjust the range as needed
  const result = num1 * num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Multiplication function in Bengali
function multiplicationBengali() {
  const index = getRandomNumber(0, multiplicationArrayBengali.length);
  const statement = multiplicationArrayBengali[index];
  const num1 = getRandomNumber(1, 11); // Adjust the range as needed
  const num2 = getRandomNumber(1, 11); // Adjust the range as needed
  const result = num1 * num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

  // Division function
function division() {
  const index = getRandomNumber(0, divisionArray.length);
  const statement = divisionArray[index];
  let num1 = getRandomNumber(1, 11); // Adjust the range as needed
  let num2 = getRandomNumber(1, 11); // Adjust the range as needed
  // Ensure num1 is divisible by num2 without remainder and num2 is not 1
  while (num1 % num2 !== 0 || num2 === 1) {
    num1 = getRandomNumber(1, 11);
    num2 = getRandomNumber(1, 11);
  }
  const result = num1 / num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}
// Division function in Hindi
function divisionHindi() {
  const index = getRandomNumber(0, divisionArrayHindi.length);
  const statement = divisionArrayHindi[index];
  let num1 = getRandomNumber(1, 11); // Adjust the range as needed
  let num2 = getRandomNumber(1, 11); // Adjust the range as needed
  // Ensure num1 is divisible by num2 without remainder and num2 is not 1
  while (num1 % num2 !== 0 || num2 === 1) {
    num1 = getRandomNumber(1, 11);
    num2 = getRandomNumber(1, 11);
  }
  const result = num1 / num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}

// Division function in Bengali
function divisionBengali() {
  const index = getRandomNumber(0, divisionArrayBengali.length);
  const statement = divisionArrayBengali[index];
  let num1 = getRandomNumber(1, 11); // Adjust the range as needed
  let num2 = getRandomNumber(1, 11); // Adjust the range as needed
  // Ensure num1 is divisible by num2 without remainder and num2 is not 1
  while (num1 % num2 !== 0 || num2 === 1) {
    num1 = getRandomNumber(1, 11);
    num2 = getRandomNumber(1, 11);
  }
  const result = num1 / num2;
  return { statement: statement.replace(/___/, num1).replace(/___/, num2), result };
}
// Now, you can select the appropriate functions based on the selected language
const start = () => {
  stopSpeaking();
  const functions = Object.values(getLanguageFunctions(language));
  const randomFunction = functions[Math.floor(Math.random() * functions.length)];
  const { statement, result } = randomFunction();
  speak(statement)
  setDisplayedStatement(statement);
  setUserAnswer('');
  setFeedbackMessage('');
  setCorrectResult(result);
};

  const getLanguageFunctions = (lang) => {
    switch (lang) {
      case 'english':
        return {
          addition: addition,
          subtraction: subtraction,
          multiplication: multiplication,
          division: division
        };
      case 'hindi':
        return {
          addition: additionHindi,
          subtraction: subtractionHindi,
          multiplication: multiplicationHindi,
          division: divisionHindi
        };
      case 'bengali':
        return {
          addition: additionBengali,
          subtraction: subtractionBengali,
          multiplication: multiplicationBengali,
          division: divisionBengali
        };
      default:
        return {
          addition: addition,
          subtraction: subtraction,
          multiplication: multiplication,
          division: division
        };
    }
  };
  
const languageContent = languages[language];

  return (
    <div className={`container-style ${isBackgroundColorChanged ? 'background-changed' : ''} ${isBackgroundColorChanged ? 'cool-style-disabled' : 'cool-style'}`} style={isBackgroundColorChanged ? null : containerStyle}>
      {/* <h1 className='heading'>Statement Page</h1> */}
      <div className="font-size-controls">
        <button className=" btn btn-primary font-size-button" onClick={decreaseFontSize}>-</button>
        <button type="button" className="btn btn-secondary font-size-button">{languageContent.font}</button>
        <button className=" btn btn-danger font-size-button" onClick={increaseFontSize}>+</button>
      </div>
      <div className="dropdown settings3">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
         {languageContent.lang}
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => {handleLanguageChange('english');}}>English</button></li>
          <li><button className="dropdown-item" onClick={() => {handleLanguageChange('hindi');}}>Hindi</button></li>
          <li><button className="dropdown-item" onClick={() => {handleLanguageChange('bengali');}}>Bengali</button></li>
        </ul>
      </div>
      <button className="start-buttons" onClick={start} >{languageContent.start}</button>
      <div className='statement-box' style={{ fontSize: `${fontSize}px` }}>
      <p className='question' >{displayedStatement}</p>
      </div>
      <p>Correct Result: </p>
      <form onSubmit={handleSubmit}>
        <input className="user-answer-input" type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
        <button className="submit-buttons"type="submit">{languageContent.submitButton}</button>
      </form>
      <p>{feedbackMessage}</p>
    </div>
  );
}
StatementPage.propTypes = {
  isBackgroundColorChanged: PropTypes.bool.isRequired,
  handleBackgroundColorChange: PropTypes.func.isRequired
};
export default StatementPage;