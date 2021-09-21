class Calculator {

    constructor(output){
        this.output = output;
        this.clear();
    }

    clear(){
        this.currentOutput = '';
        this.operation = undefined;
    }

    delete(){

    }
    
    appendNumber(number){
        this.currentOutput = number;

    }

    chooseOperation(operation){

    }

    compute(){

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

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
    })
})
