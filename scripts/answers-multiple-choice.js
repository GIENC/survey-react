import React from 'react';

const MultipleChoiceAnswers = ({questionData, questionId}) => {
    const answerSelected = (e) => {
        questionData.selectedAnswer = e.target.value;
    }

    return (
        <div id="multipleChoice" className="question-answers-wrapper">
            {
                questionData.answers.map((answer, ai) => <Answer key={questionId+'-answer-'+ai} answer={answer} name={questionId} clickAction= {answerSelected}/>)
            }
        </div>
    )
}

const Answer = ({answer, name, clickAction}) => {
    return (<div><input type="radio" value={answer} name={'question-'+name} onClick={clickAction} /> <span>{answer}</span></div>)
}

export default MultipleChoiceAnswers;