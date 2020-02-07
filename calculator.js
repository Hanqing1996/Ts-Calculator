// 声明创建按钮函数
function createButton(element, className) {
    var button = document.createElement('button');
    button.classList.add(className);
    button.classList.add('button');
    button.textContent = element;
    return button;
}
// 声明 strs,nums,operations
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
    // 创建 container
    var container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    // 创建 output
    var output = document.createElement('div');
    output.classList.add('output');
    container.appendChild(output);
    // 创建 span
    var span = document.createElement('span');
    span.classList.add('result');
    span.textContent = '0';
    output.appendChild(span);
    // 更新 container
    strs.forEach(function (array) {
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        array.forEach(function (element) {
            var button = createButton(element, "text-" + element);
            rowDiv.appendChild(button);
        });
        container.appendChild(rowDiv);
    });
    // 声明 n1,n2,operation
    var n1 = '';
    var operation = '';
    var n2 = '';
    // 计算
    container.addEventListener('click', function (e) {
        if (e.target instanceof HTMLButtonElement) {
            var button = e.target;
            var key = button.textContent;
            // key 是 num
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
                // key 是 operation
            }
            else if (operations.indexOf(key) >= 0) {
                operation += key;
            }
            else {
                // key 是 =
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
});
