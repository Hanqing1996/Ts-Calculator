var Calculator = /** @class */ (function () {
    function Calculator() {
        this.strs = [
            ['Clear', '+'],
            ['7', '8', '9', '×'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '÷'],
            ['0', '.', '='],
        ];
        this.nums = '0123456789';
        this.operations = '+-×÷';
        this.n1 = '';
        this.operation = '';
        this.n2 = '';
        this.createContainer();
        this.createOutput();
        this.createSpan();
        this.updateContainer();
        this.addContainerEvent();
    }
    // 声明创建按钮函数
    Calculator.prototype.createButton = function (element, className) {
        var button = document.createElement('button');
        button.classList.add(className);
        button.classList.add('button');
        button.textContent = element;
        return button;
    };
    // 创建 container
    Calculator.prototype.createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
        this.container = container;
    };
    // 创建 output
    Calculator.prototype.createOutput = function () {
        var output = document.createElement('div');
        output.classList.add('output');
        this.container.appendChild(output);
        this.output = output;
    };
    // 创建 span
    Calculator.prototype.createSpan = function () {
        var span = document.createElement('span');
        span.classList.add('result');
        span.textContent = '0';
        this.output.appendChild(span);
        this.span = span;
    };
    // 更新 container
    Calculator.prototype.updateContainer = function () {
        var _this = this;
        this.strs.forEach(function (array) {
            var rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            array.forEach(function (element) {
                var button = _this.createButton(element, "text-" + element);
                rowDiv.appendChild(button);
            });
            _this.container.appendChild(rowDiv);
        });
    };
    // 处理 num
    Calculator.prototype.dealNum = function (key) {
        if (!this.operation) {
            if (this.n1 == '0') {
                this.n1 = '';
            }
            this.n1 = key;
            this.span.textContent = this.n1;
        }
        else {
            if (this.n2 == '0') {
                this.n2 = '';
            }
            this.n2 += key;
            this.span.textContent = this.n2;
        }
    };
    // 计算
    Calculator.prototype.calculate = function () {
        var num1 = Number(this.n1);
        var num2 = Number(this.n2);
        var answer;
        if (this.operation == '+') {
            answer = num1 + num2;
        }
        else if (this.operation == '-') {
            answer = num1 - num2;
        }
        else if (this.operation == '×') {
            answer = num1 * num2;
        }
        else {
            answer = num1 / num2;
        }
        this.answer = answer;
    };
    // 重置 n1,n2,operation
    Calculator.prototype.initial = function () {
        this.n1 = '';
        this.n2 = '';
        this.operation = '';
    };
    // 为 container 增加监听事件
    Calculator.prototype.addContainerEvent = function () {
        var _this = this;
        this.container.addEventListener('click', function (e) {
            if (e.target instanceof HTMLButtonElement) {
                var button = e.target;
                var key = button.textContent;
                // key 是 num
                if (_this.nums.indexOf(key) >= 0) {
                    _this.dealNum(key);
                }
                else if (_this.operations.indexOf(key) >= 0) {
                    _this.operation += key;
                }
                else {
                    if (key === '=') {
                        _this.calculate();
                        _this.span.textContent = _this.answer.toString();
                        _this.initial();
                    }
                }
            }
        });
    };
    return Calculator;
}());
// 页面加载完毕后，生成一个 Calculator 实例
window.addEventListener('load', function () {
    var calculator = new Calculator();
});
