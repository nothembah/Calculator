class Calculator {

    constructor(output){
        this.output = output;
        this.clear();
    }

    clear(){
        this.output = '';
        this.operation = undefined;
    }

    delete(){

    }
    
    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){

    }
}

let output = document.querySelector(".output")
let clearBtn = document.querySelector(".clear")
let deleteBtn = document.querySelector(".output")
let equalsBtn = document.querySelector(".equals")
let numberBtns = document.querySelectorAll(".number")
let operationBtns = document.querySelectorAll(".operation")

const calculator = new Calculator(output);

clearBtn.addEventListener('click', () => {
    calculator.clear();
})

numberBtns.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
})
