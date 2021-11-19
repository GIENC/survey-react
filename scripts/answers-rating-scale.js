import React from 'react';

const RatingScaleAnswers = ({questionData, questionId}) => {
    let labels = [];
    for (let a=questionData.minRange;a<=questionData.maxRange;a++) {
        labels.push(a);
    }

    const answerSelected = (e) => {
        questionData.selectedAnswer = e.target.value;
    }

    return (
        <div id="ratingScale" className="question-answers-wrapper">
            <div className="min-label">{questionData.minLabel}</div>
            <div className="answers">
                {labels.map((item, i) => {
                    return (
                        <div key={questionId+'-a-'+i}>
                            <RadioButton val={i+1} name={questionId} clickAction={answerSelected} />
                            <div className="answer-label">{item}</div>
                        </div>
                    )
                })}
            </div>
            <div className="max-label">{questionData.maxLabel}</div>
        </div>
    )
}

const RadioButton = ({val, name, clickAction}) => <input onClick={clickAction} type="radio" value={val} name={name}  />

export default RatingScaleAnswers;