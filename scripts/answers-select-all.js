import React from 'react';

const SelectAllAnswers = ({questionData, questionId}) => {
    questionData.selectedAnswers = [];
    const answerSelected = (e) => {
        let v = e.target.value;
        let valueIndex = questionData.selectedAnswers.indexOf(v);
        if (valueIndex === -1) {
            questionData.selectedAnswers.push(v);
        } else {
            questionData.selectedAnswers.splice(valueIndex, 1);
        }
    }

    return (
        <div id="selectAll" className="question-answers-wrapper">
            {
                questionData.answers.map((answer, ai) => <Answer key={questionId+'-answer-'+ai} answer={answer} name={questionId} clickAction= {answerSelected}/>)
            }
        </div>
    )
}

const Answer = ({answer, name, clickAction}) => {
    return (<div><input type="checkbox" value={answer} name={'question-'+name} onClick={clickAction} /> <span>{answer}</span></div>)
}

export default SelectAllAnswers;