function addNums(a, b) {
    return a + b;
}

function minusNums(a, b) {
    return a - b;
}

function multipNums(a, b) {
    return a * b;
}

function expo(a, b) {
    return Math.pow(a, b);
}

function divNums(a, b) {

    return a / b;
}
module.exports = {
    add: addNums,
    minus: minusNums,
    multip: multipNums,
    divnum: divNums,
    expo: expo
}