function add(operand_1, operand_2) {
    return  operand_1 + operand_2;
}

function subtract(operand_1, operand_2) {
    return operand_1 - operand_2;
}

function multiply(operand_1, operand_2) {
    return operand_1 * operand_2;
}

function divide(operand_1, operand_2) {
    if(operand_2 == 0) return "get a life buddy :|"
    return operand_1 / operand_2;
}

function operation(operand_1, operand_2, operator) {
    if(operator == '+') return add(operand_1,operand_2);
    else if(operator == '-') return subtract(operand_1,operand_2);
    else if(operator == '*') return multiply(operand_1,operand_2);
    else return divide(operand_1,operand_2);
}

let displayContent = document.getElementById("display");

let button_1 = document.getElementById("1");
let button_2 = document.getElementById("2");
let button_3 = document.getElementById("3");
let button_4 = document.getElementById("4");
let button_5 = document.getElementById("5");
let button_6 = document.getElementById("6");
let button_7 = document.getElementById("7");
let button_8 = document.getElementById("8");
let button_9 = document.getElementById("9");
let button_0 = document.getElementById("0");
let button_add = document.getElementById("+");
let button_sub = document.getElementById("-");
let button_mul = document.getElementById("*");
let button_div = document.getElementById("/");
let button_result = document.getElementById("=");
let button_clear = document.getElementById("clear");

let operand_1 = 0;
let operand_2 = 0;
let operator = '';
let result = 0;

button_1.addEventListener("click",function () {
    displayContent.textContent += "1";
});

button_2.addEventListener("click",function () {
    displayContent.textContent += "2";
});

button_3.addEventListener("click",function () {
    displayContent.textContent += "3";
});

button_4.addEventListener("click",function () {
    displayContent.textContent += "4";
});

button_5.addEventListener("click",function () {
    displayContent.textContent += "5";
});

button_6.addEventListener("click",function () {
    displayContent.textContent += "6";
});

button_7.addEventListener("click",function () {
    displayContent.textContent += "7";
});

button_8.addEventListener("click",function () {
    displayContent.textContent += "8";
});

button_9.addEventListener("click",function () {
    displayContent.textContent += "9";
});

button_0.addEventListener("click",function () {
    displayContent.textContent += "0";
});

button_add.addEventListener("click",function () {
    if(operator !== '') {
        operand_2 = Number(displayContent.textContent);
        result = operation(operand_1, operand_2, operator);
        operator = '';
        displayContent.textContent = result;
    }
    operand_1 = Number(displayContent.textContent);
    operator = '+';
    displayContent.textContent = '';
});

button_sub.addEventListener("click",function () {
    if(operator !== '') {
        operand_2 = Number(displayContent.textContent);
        result = operation(operand_1, operand_2, operator);
        operator = '';
        displayContent.textContent = result;
    }
    operand_1 = Number(displayContent.textContent);
    operator = '-';
    displayContent.textContent = '';
    
});

button_mul.addEventListener("click",function () {
    if(operator !== '') {
        operand_2 = Number(displayContent.textContent);
        result = operation(operand_1, operand_2, operator);
        operator = '';
        displayContent.textContent = result;
    }
    operand_1 = Number(displayContent.textContent);
    operator = '*';
    displayContent.textContent = '';
    
});

button_div.addEventListener("click",function () {
    if(operator !== '') {
        operand_2 = Number(displayContent.textContent);
        result = operation(operand_1, operand_2, operator);
        operator = '';
        displayContent.textContent = result;
    }
    operand_1 = Number(displayContent.textContent);
    operator = '/';
    displayContent.textContent = '';
    
});

button_result.addEventListener("click",function () {
    operand_2 = Number(displayContent.textContent);
    result = operation(operand_1, operand_2, operator);
    operator = '';
    displayContent.textContent = result;
});

button_clear.addEventListener("click",function () {
    operand_1 = 0;
    operand_2 = 0;
    operator = '';
    result = 0;
    displayContent.textContent = '';
});

