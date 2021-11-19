# GIENC Survey Component

Welcome to GIENC's react survey component created for our online class program. This is only the start and we hope to add more features to it in the future.

### Types Of Questions

1. Rating Scale (rating-scale)
2. Text Feedback (text-feedback)
3. Multiple Choice (multiple-choice)
4. Select All (select-all)

### Data Structure

Please look at *localData.js* to see what the data structure should look like.

### How To Use It

###### Step 1

Download the package and include it in your project. We made some local testing data that will be used by default but when you are ready to add your own data just change useLocalData in index.js to false or remove the reassignment.

###### Step 2

After you have downloaded the package, add this to you react code.

```javascript
import SurveyApp from './survey/index';`

<SurveyApp surveyTitle={title} surveyData={content} />
```