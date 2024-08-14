import { LightningElement, api } from 'lwc';

export default class ScoreInformation extends LightningElement {
    @api score;
    @api attemptNum;

}