function createButton(element, className) {
    var button = document.createElement('button');
    button.classList.add(className);
    button.classList.add('button');
    button.textContent = element;
    return button;
}
var strs = [
    ['Clear', '+'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '÷'],
    ['0', '.', '='],
];
var nums = '0123456789';
var operations = '+-×÷';
window.addEventListener('load', function () {
    var container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    var output = document.createElement('div');
    output.classList.add('output');
    container.appendChild(output);
    var span = document.createElement('span');
    span.classList.add('result');
    span.textContent = '0';
    output.appendChild(span);
    var n1 = '';
    var operation = '';
    var n2 = '';
    container.addEventListener('click', function (e) {
        if (e.target instanceof HTMLButtonElement) {
            var button = e.target;
            var key = button.textContent;
            if (nums.indexOf(key) >= 0) {
                if (!operation) {
                    if (n1 == '0') {
                        n1 = '';
                    }
                    n1 = n1 + key;
                    span.textContent = n1;
                }
                else {
                    if (n2 == '0') {
                        n2 = '';
                    }
                    n2 += key;
                    span.textContent = n2;
                }
            }
            else if (operations.indexOf(key) >= 0) {
                operation += key;
            }
            else {
                if (key === '=') {
                    var num1 = Number(n1);
                    var num2 = Number(n2);
                    var answer = void 0;
                    if (operation == '+') {
                        answer = num1 + num2;
                    }
                    else if (operation == '-') {
                        answer = num1 - num2;
                    }
                    else if (operation == '×') {
                        answer = num1 * num2;
                    }
                    else {
                        answer = num1 / num2;
                    }
                    span.textContent = answer.toString();
                    n1 = '';
                    n2 = '';
                    operation = '';
                }
            }
        }
    });
    strs.forEach(function (array) {
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        array.forEach(function (element) {
            var button = createButton(element, "text-" + element);
            rowDiv.appendChild(button);
        });
        container.appendChild(rowDiv);
    });
});
