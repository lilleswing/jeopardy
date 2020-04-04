import React, {useState} from 'react';



export default function Question(props) {
    function showAnswer() {
        if (whatBody === "price") {
            setBody("clue");
        }
        if (whatBody === "clue") {
            setBody("answer");
        }
        if (whatBody === "answer") {
            setBody("empty");
        }
    }
    const [whatBody, setBody] = useState("price");
    //setState(props);
    var body = "";
    if (whatBody !== "emtpy") {
      body = props[whatBody];
    }
    return <div className='box' onClick={showAnswer}> {body} </div>;
}
