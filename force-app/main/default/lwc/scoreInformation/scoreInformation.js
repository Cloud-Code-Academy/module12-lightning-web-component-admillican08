import { LightningElement, api } from 'lwc';

export default class ScoreInformation extends LightningElement {
    @api score;
    @api attemptNum;
    @api numberOfQuestions;

    get numberOfQuestionsCorrect(){
         console.log('**Number questions: ' + this.numberOfQuestions);
        console.log('**Number correct qs: ' + Math.floor((this.score/100) * this.numberOfQuestions));
        return Math.floor((this.score/100) * this.numberOfQuestions);
    }

    get numberOfQuestionsIncorrect(){
        let incor = this.numberOfQuestions - this.numberOfQuestionsCorrect;
        return incor;
    }
}