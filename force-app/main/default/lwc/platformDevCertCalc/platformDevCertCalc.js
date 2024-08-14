import { LightningElement, track } from 'lwc';

export default class PlatformDevCertCalc extends LightningElement {
    devFundamentalScore = 50;
    procAutomationScore = 50;
    userInterfaceScore = 50;
    testDebugDeployScore = 50;

    certificationScore = 50;

    showResources = false;
    showGoodJob = false;
    keyVals = [1,2,3,4];
 
    generateRandom(){
        return Math.floor(Math.random() * 100);
    }
 
    @track attemptHistory = [];

    connectedCallback(){
        for(let i=0; i<this.keyVals.length; i++){
            const dummyAttempt = {Id: this.keyVals[i], Score: this.generateRandom()}
            this.attemptHistory.push(dummyAttempt);
        }
    }

       addAttemptHistory(score){
        let attemptNum = Number(this.keyVals.slice(-1)) + 1;
        this.keyVals.push(attemptNum);
        const attempt = {
                            Id:attemptNum, Score:score
                        }
        console.log('**Attempt Id: ' + attemptNum);
        this.attemptHistory = [...this.attemptHistory, attempt];
         console.log('**Attempt Id after added to attemptHistory array: ' + attemptNum);
         console.log('**attemptHistory array: ' + this.attemptHistory);
    }

    calculateScore(){
        this.certificationScore = (this.devFundamentalScore * 0.23) + 
        (this.procAutomationScore * 0.30) + (this.userInterfaceScore * 0.25) 
        + (this.testDebugDeployScore * 0.22);
        if(this.certificationScore < 0 || this.certificationScore > 100){
            alert("Certification score error. Please check your inputs");
            this.certificationScore = 0;
        }
       this.showResourcesIfFailed();
       this.addAttemptHistory(this.certificationScore);
    }

    handleChange(event){
        const inputName = event.target.name;
        let value = Number(event.target.value);
        if(inputName === 'devFundamentals'){
                this.devFundamentalScore = value;
        } else if (inputName === 'procAutomation'){
                this.procAutomationScore = value;
        } else if (inputName === 'userInterface'){
                this.userInterfaceScore = value;
        } else if (inputName === 'testDebugDeploy'){
                this.testDebugDeployScore = value;
        } else {
            alert('Error with input number');
        }
    }

    handleClick(event){
        this.calculateScore();
    }

    showResourcesIfFailed(){
        if(this.certificationScore < 68){
            this.showResources = true;
        } else {
            this.showResources = false;
        }
        this.showGoodJob = !this.showResources;
    }

  
}