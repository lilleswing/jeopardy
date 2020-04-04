import React from 'react';
import './App.css';
import Question from "./Question";
import questionData from './question-data.json';

function getQuestionsForTopic(topic) {
  let questions = [];
  for (let i = 0 ;i < questionData['questions'].length; i++) {
    let question = questionData['questions'][i];
    if (question['topic'] === topic) {
        let key = topic + i;
        questions.push(<Question clue={question.clue} 
                                 answer={question.answer} key={key}
                                 price={i * 100}/>);
    }
  }
  return questions;
}


function App() {
  let historyQuestions = getQuestionsForTopic("history");
  let sportsQuestions = getQuestionsForTopic("sports");
  let cultureQuestions = getQuestionsForTopic("tech");
  return (
    <div className="App">
        <h1> Jeopardy </h1>
        <div className="board">
            {/* Column - 1 (HISTORY) */}
            <div className="column">
                {historyQuestions}
            </div>
            {/* Column - 2 (SPORTS) */}
            <div className="column">
                {sportsQuestions}
            </div>
            {/* Column - 3 (TECH) */}
            <div className="column">
                {cultureQuestions}
            </div>
        </div>
    </div>
  );
}

export default App;
