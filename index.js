import React from 'react';

import localData from './localData';
import Question from './scripts/question';

import './styles/survey.css';

const useLocalData = true;

const SurveyApp = ({surveyTitle, surveyData}) => {
    if (useLocalData) {
        surveyTitle = localData.title;
        surveyData = localData.content;
    }

    const handleSurveySubmit = () => {
        alert('Survey submitted!');
        console.log('handleSurveySubmit', surveyData);
    }

    return !surveyData ? <div className="survey-loading">Awaiting survey data...</div> : (
        <div>
            <SurveyTitle title={surveyTitle} />
            <SetupSurvey data={surveyData} handleSurveySubmit={handleSurveySubmit} />
        </div>
    )
}

const SurveyTitle = ({title}) => <h1 className="survey-title">{title}</h1>;

const SetupSurvey = ({data, handleSurveySubmit}) => {

    return (
        <div id="survey" className="survey-content">
            {data.map((item, i) => <Question questionData={item} questionId={item.questionId} key={item.questionId} /> )}

            <div className="submit-survey">
                <button onClick={handleSurveySubmit}>Submit</button>
            </div>
        </div>
    )
}

export default SurveyApp;