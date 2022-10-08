//javascript file

function handleEvent(e) {
  if (e.target.id == 'back' || e.key == 'Backspace') {
    console.log('backspace')
  }
}
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
let firstNumber = '';
let secondNumber = 0
let operator = ''
screenUI.textContent = '0'

const reset = function() {
  screen = '';
  firstNumber = '';
  secondNumber = 0
  operator = ''
  screenUI.textContent = '0'
  unselectAll()
};

const opButtons = document.getElementsByClassName('op');
let i;
function unselectAll() {
  for (i = 0; i < opButtons.length; i++) {
    opButtons[i].classList.remove("selected");
  }
}

const calculator = document.getElementById('calculator');
calculator.addEventListener('click', handleEvent);
window.addEventListener('keydown', handleEvent);

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

    if (event.target.id =='back'){
    console.log('back pressed')
    screenUI.textContent = screenUI.textContent.slice(0, -1);
    screen = screenUI.textContent;
    return;
  }

  if (event.target.id == '.' && screenUI.textContent.includes('.')){
    return;
  };

  if (event.target.classList.contains('op') ){
    unselectAll();
    event.target.classList.add('selected');
    if (screen === '') {
      console.log('screen empty')
      operator = (event.target.id);
      return; 
    }
    if (firstNumber === ''){
      console.log('first number empty')
      firstNumber = Number(screen);
      operator = (event.target.id);
      screen = '';
    }else{
      secondNumber = Number(screen);
      console.log(firstNumber,secondNumber)
      screen = operate(firstNumber, secondNumber, operator);
      screenUI.textContent = Number(screen.toFixed(2));
      firstNumber = '';
      secondNumber = 0;
      operator = '';
    }
  }else{
  console.log(screenUI.textContent)
  screen = screen + (event.target.id);
  console.log(screen)
  screenUI.textContent = Number(screen);
  }
})