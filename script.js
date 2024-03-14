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
    return operand_1 / operand_2;
}

function operator(operand_1, operand_2, operator) {
    if(operator == '+') add(operand_1,operand_2);
    else if(operator == '-') subtract(operand_1,operand_2);
    else if(operator == '*') multiply(operand_1,operand_2);
    else divide(operand_1,operand_2);
}

// console.log("helloji")