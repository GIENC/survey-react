const surveyLocalData = {
    surveyId: 'survey-local-id-2021',
    title: 'localData Survey',
    content: [
        {
            "questionId": "survey-question-id-1",
            "question": "You need a scale survey tool.",
            "type": "rating-scale",
            "minLabel": "Strongly disagree",
            "minRange": 1,
            "maxLabel": "Strongly agree",
            "maxRange": 5,
            "required": true
        },
        {
            "questionId": "survey-question-id-2",
            "question": "This is a useful feedback component. What do you think?",
            "type": "text-feedback",
            "placeholder": 'Tell us what you think!',
            "required": true
        },
        {
            "questionId": "survey-question-id-3",
            "question": "What's the purpose of this tool?",
            "type": "multiple-choice",
            "answers": ["To help people", "AI training", "To take over the world", "Lunch"],
            "required": true
        },
        {
            "questionId": "survey-question-id-4",
            "question": "I'm using this tool because...",
            "type": "select-all",
            "answers": ["to save time", "it's simple and easy to use", "GIENC is made a great tool", "I prefer not to answer"],
            "required": true
        }
    ]
}

export default surveyLocalData;