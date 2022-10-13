//javascript file
const ops = new Set(['/','*','-','+','=','enter'])
function handleEvent(e) {
  e = e.toLowerCase();
  console.log(e)

  if (e === 'c' || e === 'escape') {
    (console.log('clear'))
    reset();
    return;
  } else if (e =='backspace') {
    console.log('back pressed')
    screenUI.textContent = screenUI.textContent.slice(0, -1);
    screen = screenUI.textContent;
    return;
  } else if (e =='symbol') {
    console.log('symbol')
    screenUI.textContent = Number(screenUI.textContent) * (-1)
    screen = screenUI.textContent;
    return;
  } else if (e == '.') {
    if (screenUI.textContent.includes('.')) {
      return;
    } else {
      screen = screen + e;
      screenUI.textContent = screen;
    }
  } else if (!isNaN(e)) {
    console.log('number')
    console.log(screenUI.textContent)
    screen = screen + e;
    console.log(screen)
    screenUI.textContent = Number(screen);
    return;
  } else if (ops.has(e)) {
    unselectAll();
    opButtons[e].classList.add('selected');
    if (e === 'enter') { e = '='}
    if (screen === '') {
      operator = e;
      return; 
    }
    if (firstNumber === ''){
      console.log('first number empty')
      firstNumber = Number(screen);
      operator = e;
      screen = '';
      topScreenUI.textContent = (firstNumber + operator)
    }else{
      secondNumber = Number(screen);
      topScreenUI.textContent = (firstNumber + operator + secondNumber)
      screen = operate(firstNumber, secondNumber, operator);
      if (!isFinite(screen)){
        reset();
        divZero();
        return;
      }
      screenUI.textContent = Number(screen.toFixed(2));
      firstNumber = screen;
      secondNumber = 0;
      operator = e;
      screen = ''
    }
  }
};

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
    default: //after equal sign start a new operation
      console.log('default')
      return (0 + b);
  }
}

let screenUI = document.getElementById('screen');
let topScreenUI = document.getElementById('topScreen')
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
  topScreenUI.textContent = ''
  unselectAll()
};

const opButtons = document.getElementsByClassName('op');
let i;
function unselectAll() {
  for (i = 0; i < opButtons.length; i++) {
    opButtons[i].classList.remove("selected");
  }
}

const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', function(e) {handleEvent(e.target.id);});
window.addEventListener('keydown', function(e) {handleEvent(e.key);});

function divZero() {
  var a = document.createElement('a');
  var link = document.createTextNode("Click here to see result");
  a.appendChild(link);
  a.href = 'https://youtu.be/-AXetJvTfU0';
  a.title = "click here to see result";
  a.setAttribute('target', '_blank');
  topScreenUI.appendChild(a);
}