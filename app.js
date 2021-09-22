class Calculator {

    constructor(prev, output){
        this.prev = prev;
        this.output = output;
        this.clear();
    }
    
    /*clears output*/
    clear(){
        this.currentOutput = '';
        this.prevOutput = '';
        this.operation = undefined;
    }

    /*deletes last appended digit*/
    delete(){
        this.currentOutput = this.currentOutput.toString().slice(0, -1)
    }
    
    /*add digit to output screen*/
    appendNumber(number){
        if(number === '.' && this.currentOutput.includes('.')){
            return ;
        }
        this.currentOutput += number;

    }

    /*choose operator to compute*/
    chooseOperation(operation){
        if (this.previousOutput !== '') {
            this.compute()
        }

        this.prevOutput = this.currentOutput;
        
        if(this.currentOutput = ''){
            return 0;
        }
        
        this.operation = operation;
        this.currentOutput = '';
        this.prePrevOutput = ''
    }

    /*takes chosen operator an applies computation*/
    compute(){
        let computation
        let prev = parseFloat(this.prevOutput);
        let current = parseFloat(this.currentOutput);
        
        if(isNaN(prev) || isNaN(current)){
            return
        }
        switch(this.operation){
                case '+':
                  computation = prev + current;
                  break;
                case '-':
                  computation = prev - current;
                  break;
                case '×':
                  computation = prev * current;
                  break;
                case '÷':
                  computation = prev / current;
                  break;
                default:
                  return
        }
        
        this.prePrevOutput = this.prevOutput
        this.prevOutput = this.currentOutput;/*
        this.operation = undefined;*/
        this.currentOutput = computation;
    }

    /*updates the display of output screen*/
    updateDisplay(){
        this.output.innerText = this.currentOutput;
        if (this.operation != null || this.operation != undefined) {
            if(this.prePrevOutput == ''){
                this.prev.innerText = this.prevOutput + " " + this.operation;
            } else {
                this.prev.innerText = this.prePrevOutput + ' ' + this.operation + ' ' + this.prevOutput;
            }
        } else {
            this.prev.innerText = '';
        }
    }
}

/*Selecting elements created in html */
let prev = document.querySelector("[data-prev-output]")
let output = document.querySelector("[data-output")
let clearBtn = document.querySelector("[data-clear]")
let deleteBtn = document.querySelector("[data-delete]")
let equalsBtn = document.querySelector("[data-equals]")
let numberBtns = document.querySelectorAll("[data-number]")
let operationBtns = document.querySelectorAll("[data-operation]")

/*calculator instance*/
const calculator = new Calculator(prev, output);

/*Button Event Listeners*/
clearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    })
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})
