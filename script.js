function clearResult() {
    document.getElementById('result').value = '';
}

function del() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0,-1);
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    const currentResult = document.getElementById('result').value;
    const lastChar = currentResult.charAt(currentResult.length - 1);

    if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/'&& lastChar !=='%') {
        document.getElementById('result').value += operator;
    }
}

function appendDot() {
    const currentResult = document.getElementById('result').value;
    const lastChar = currentResult.charAt(currentResult.length - 1);

    if (!currentResult.includes('.') && !isNaN(lastChar)) {
        document.getElementById('result').value += '.';
    }
}

function calculateResult() {
    const currentResult = document.getElementById('result').value;

    try {
        const result = eval(currentResult);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
