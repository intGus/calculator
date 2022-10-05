//javascript file
const add = function(a, b){
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
	return a / b;
};

const operate = function(a, b, operator){
  switch(operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return (a + 0);
  }

}

let screenUI = document.getElementById('screen');
let screen = '';
let firstNumber = 0
let secondNumber = 0
let operator = ''

const reset = function() {
  screen = '';
  firstNumber = 0
  secondNumber = 0
  operator = ''
  screenUI.textContent = '0'
};

const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  if (event.target.id == 'C'){
    reset();
    return;
  };
  if (event.target.getAttribute('class') == "op"){
    if (firstNumber == 0){
      firstNumber = Number(screen);
      operator = (event.target.id);
      screen = '';
    }else{ //add second condition to verify if the operator symbolm was clicked more than once
      secondNumber = Number(screen);
      screen = operate(firstNumber, secondNumber, operator);
      screenUI.textContent = screen;
      firstNumber = 0;
      secondNumber = 0;
      operator = '';
    }
  }else{
  screen = screen + (event.target.id);
  
  screenUI.textContent = screen;
  }
})