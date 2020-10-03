function getHistory() {
    return document.getElementById('history-value').innerHTML;
}

function printHistoty(num) {
    document.getElementById('history-value').innerHTML = num;
}

function getOutput() {
    return document.getElementById('output-value').innerHTML;
}

function printOutput(num) {
    document.getElementById('output-value').innerHTML = getFormattedNumber(num);
}

//printHistoty('1223');
//printOutput('33333333')

function getFormattedNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

let number = document.querySelectorAll('.number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        //alert('SOMETHING CLICKED ' + this.id);
        let output = reverseNumberFormat(getOutput());
        if (output != NaN) {
            output += this.id;
            printOutput(output);
        }
    });
}

let operator = document.querySelectorAll('.operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        //alert('SOMETHING CLICKED ' + this.id);
        if (this.id === 'clear') {
            printHistoty('');
            printOutput('');
        } else if (this.id === 'backspace') {
            if (output) {
                let output = reverseNumberFormat(getOutput()).toString();
                output = output.substring(0, output.length - 1)
                printOutput(output);
            }
        } else {
            let history = getHistory()
            let output = getOutput();
            if (output != NaN) {
                output = reverseNumberFormat(output);
                history = history + output;
                if (this.id === '=') {
                    let result = eval(history);
                    printOutput(result);
                    printHistoty('');
                } else {
                    history = history + this.id;
                    printHistoty(history);
                    printOutput('')
                }
            }
        }
    });
}