class Calculator {
    public container: HTMLDivElement;
    public output: HTMLDivElement;
    public span: HTMLSpanElement;
    public clear: HTMLButtonElement;
    public strs: Array<Array<string>> = [
        ['Clear', '+'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '÷'],
        ['0', '.', '='],
    ];
    public nums: string = '0123456789.';
    public answer: number;
    public operations: string = '+-×÷';
    public n1: string = '';
    public operation: string = '';
    public n2: string = '';

    constructor() {
        this.createContainer()
        this.createOutput()
        this.createSpan()
        this.updateContainer()
        this.addContainerEvent()
        this.addClearEvent()
    }

    // 声明创建按钮函数
    createButton(element: string, className: string): HTMLButtonElement {
        let button: HTMLButtonElement = document.createElement('button')
        button.classList.add(className)
        button.classList.add('button')
        button.textContent = element
        return button
    }

    // 创建 container
    createContainer() {
        let container: HTMLDivElement = document.createElement('div')
        container.classList.add('container')
        document.body.appendChild(container)
        this.container = container
    }

    // 创建 output
    createOutput() {
        let output: HTMLDivElement = document.createElement('div')
        output.classList.add('output')
        this.container.appendChild(output)
        this.output = output
    }

    // 创建 span
    createSpan() {
        let span: HTMLSpanElement = document.createElement('span')
        span.classList.add('result')
        span.textContent = '0'
        this.output.appendChild(span)
        this.span = span
    }

    // 更新 container
    updateContainer() {
        this.strs.forEach(array => {
            let rowDiv: HTMLDivElement = document.createElement('div')
            rowDiv.classList.add('row')
            array.forEach(element => {
                let button: HTMLButtonElement = this.createButton(element, `text-${element}`)
                rowDiv.appendChild(button)

                if (element === 'Clear') {
                    this.clear = button

                }
            })
            this.container.appendChild(rowDiv)
        })
    }

    // 处理 num
    dealNum(key) {
        if (!this.operation) {
            if (this.n1 == '0') {
                this.n1 = ''
            }
            this.n1 += key
            this.span.textContent = this.n1
        } else {
            if (this.n2 == '0') {
                this.n2 = ''
            }
            this.n2 += key
            this.span.textContent = this.n2
        }
    }

    // 计算
    calculate() {
        let num1: number = parseFloat(this.n1)
        let num2: number = parseFloat(this.n2)
        let answer: number
        if (this.operation == '+') {
            answer = num1 + num2
        } else if (this.operation == '-') {
            answer = num1 - num2
        } else if (this.operation == '×') {
            answer = num1 * num2
        } else {
            answer = num1 / num2
        }
        this.answer = parseFloat(answer.toFixed(2))
    }

    // 重置 n1,n2,operation
    initial() {
        this.n1 = ''
        this.n2 = ''
        this.operation = ''
    }

    // 为 container 增加监听事件
    addContainerEvent() {
        this.container.addEventListener('click', (e) => {
            if (e.target instanceof HTMLButtonElement) {
                let button: HTMLButtonElement = e.target
                let key: string = button.textContent

                // key 是 num
                if (this.nums.indexOf(key) >= 0) {
                    this.dealNum(key)
                } else if (this.operations.indexOf(key) >= 0) {
                    this.operation += key
                } else {
                    if (key === '=') {
                        this.calculate()
                        this.span.textContent = this.answer.toString()
                        this.initial()
                    }
                }

            }
        })
    }

    // 为 clear 按键设置监听事件
    addClearEvent() {
        this.clear.addEventListener('click', () => {
            this.initial()
            this.span.textContent='0'
        })
    }
}

// 页面加载完毕后，生成一个 Calculator
window.addEventListener('load', () => {
    let calculator = new Calculator()
});