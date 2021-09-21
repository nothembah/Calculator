class Calculator {

    constructor(output){
        this.output = output;
        this.clear();
    }

    clear(){
        this.currentOutput = '';
        this.prevOutput = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOutput = this.currentOutput.toString().slice(0, -1)
    }
    
    appendNumber(number){
        if(number === '.' && this.currentOutput.includes('.')){
            return ;
        }
        this.currentOutput += number;

    }

    chooseOperation(operation){
        this.prevOutput = this.currentOutput;
        if(this.currentOutput = ''){
            return 0;
        }
        
        this.operation = operation;
        this.currentOutput = '';

    }

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
        this.currentOutput = computation;
        this.prevOutput = '';
        this.operation = undefined;
    }

    updateDisplay(){
        this.output.innerText = this.currentOutput;
    }
}

let output = document.querySelector("[data-output")
let clearBtn = document.querySelector("[data-clear]")
let deleteBtn = document.querySelector("[data-delete]")
let equalsBtn = document.querySelector("[data-equals]")
let numberBtns = document.querySelectorAll("[data-number]")
let operationBtns = document.querySelectorAll("[data-operation]")

const calculator = new Calculator(output);

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
