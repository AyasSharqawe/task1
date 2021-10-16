let buttonElemnt = document.getElementById('BTN');

buttonElemnt.addEventListener('click' , ()=>{
let bodyEl=document.getElementById('T');
bodyEl.style.backgroundColor="pink"

function add(a, b) {
    return a + b;
}
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

let result = add(number1,number2);

console.log("The sum is " + result);
