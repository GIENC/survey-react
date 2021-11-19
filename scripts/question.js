import React from 'react';

import RatingScaleAnswers from './answers-rating-scale';
import TextFeedbackAnswers from './answers-text-feedback';
import MultipleChoiceAnswers from './answers-multiple-choice';
import SelectAllAnswers from './answers-select-all';

const Question = ({questionData, questionId}) => {
    return (
        <div className="survey-question-wrapper">
            <div className="question">{questionData.question} {questionData.required ? <span>*</span> : null}</div>
            {questionData.type === 'rating-scale' ? <RatingScaleAnswers questionData={questionData} questionId={questionId} /> : null}
            {questionData.type === 'text-feedback' ? <TextFeedbackAnswers questionData={questionData} questionId={questionId} /> : null}
            {questionData.type === 'multiple-choice' ? <MultipleChoiceAnswers questionData={questionData} questionId={questionId} /> : null}
            {questionData.type === 'select-all' ? <SelectAllAnswers questionData={questionData} questionId={questionId} /> : null}
        </div>
    )
}

export default Question;