import React, {useState} from 'react';


export default function Question(props) {
    function showAnswer() {
        if (whatBody === "") {
            return;
        }
        props.updateFn(props.clue, props.answer);
        setBody("");
    }

    const [whatBody, setBody] = useState(props["price"]);
    return <div className='box' onClick={showAnswer}> {whatBody} </div>;
}
