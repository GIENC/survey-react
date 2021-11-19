import React, { useState } from 'react';

const TextFeedbackAnswers = ({questionData, questionId}) => {
    const [questionFeedback, setQuestionFeedback] = useState('');

    const onFeedbackChange = (e) => {
        setQuestionFeedback(() => e.target.value)
        questionData.userFeedback = questionFeedback;
    }

    return (
        <div id="textFeedback" className="question-answers-wrapper">
            <Feedback questionData={questionData} feedback={questionFeedback} onFeedbackChange={onFeedbackChange} />
        </div>
    )
}

const Feedback = ({questionData, feedback, onFeedbackChange}) => <textarea onChange={onFeedbackChange} value={feedback} placeholder={questionData.placeholder ? questionData.placeholder : 'Reply here'}></textarea>

export default TextFeedbackAnswers;