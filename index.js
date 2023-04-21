

function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function increment(num) {
    return num+=1;
    
}

function decrement(num) {
    num--
    return num;

}

function makeInt(num,radix=10) {
    return parseInt(num,radix);
}

function preserveDecimal(num) {
    return parseFloat(num);
    
}