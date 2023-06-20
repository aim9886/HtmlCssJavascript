let result = document.getElementById('result');
let expression = '';

function appendNumber(num) {
  expression += num;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function clearResult() {
  expression = '';
  result.value = '';
}

function calculate() {
  try {
    let evaluation = eval(expression);
    result.value = evaluation;
    expression = '';
  } catch (error) {
    result.value = 'Error';
  }
}