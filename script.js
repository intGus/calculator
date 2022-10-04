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
  }

}

let screen ='';
const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  screen = screen + (event.target.id);
  screenUI = document.getElementById('screen');
  screenUI.textContent = screen
})