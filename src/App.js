import React, {useState} from 'react';
import './App.css';
import Question from "./Question";
import questionData from './question-data.json';


function App() {
    function setPrices() {
        let topicMap = {}
        for (let i = 0; i < questionData['questions'].length; i++) {
            let question = questionData['questions'][i];
            let topic = question['topic'];
            if (!(topic in topicMap)) {
                topicMap[topic] = 100;
            }
            question['price'] = topicMap[topic];
            topicMap[topic] += 100;
        }
    }

    function getQuestionsForTopic(topic) {
        let questions = [];
        for (let i = 0; i < questionData['questions'].length; i++) {
            let question = questionData['questions'][i];
            if (question['topic'] === topic) {
                let key = topic + i;
                questions.push(<Question clue={question.clue}
                                         answer={question.answer} key={key}
                                         price={question.price}
                                         updateFn={showSingleClue}/>);
            }
        }
        return questions;
    }

    function showSingleClue(myClue, myAnswer) {
        setBoard('showClue');
        setClue(myClue);
        setAnswer(myAnswer);
    }

    function showBoard(text, onClickValue) {
        function toggleAnswer() {
            setBoard(onClickValue);
        }

        let historyQuestions = getQuestionsForTopic("history");
        let sportsQuestions = getQuestionsForTopic("sports");
        let techQuestions = getQuestionsForTopic("tech");

        let boardClassName = "board";
        if (isBoard !== "showBoard") {
            boardClassName += " hidden";
        }

        return (
            <div className="App">
                <h1> Jeopardy </h1>
                <div className={boardClassName}>
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
                        {techQuestions}
                    </div>
                </div>
                <h1 className="clue" onClick={toggleAnswer}> {text} </h1>
            </div>
        );
    }


    const [isBoard, setBoard] = useState('showBoard');
    const [myClue, setClue] = useState('');
    const [myAnswer, setAnswer] = useState('');
    setPrices();


    if (isBoard === 'showBoard') {
        return showBoard("", "");
    }
    if (isBoard === 'showClue') {
        return showBoard(myClue, 'showAnswer');
    }
    if (isBoard === 'showAnswer') {
        return showBoard(myAnswer, 'showBoard');
    }
}

export default App;
