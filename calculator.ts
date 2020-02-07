// 声明创建按钮函数
function createButton(element: string, className: string): HTMLButtonElement {
    let button: HTMLButtonElement = document.createElement('button')
    button.classList.add(className)
    button.classList.add('button')
    button.textContent = element
    return button
}

// 声明 strs,nums,operations
let strs: Array<Array<string>> =
    [
        ['Clear', '+'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '÷'],
        ['0', '.', '='],
    ]

let nums: string = '0123456789'
let operations: string = '+-×÷'

window.addEventListener('load', () => {

    // 创建 container
    let container: HTMLDivElement = document.createElement('div')
    container.classList.add('container')
    document.body.appendChild(container)

    // 创建 output
    let output: HTMLDivElement = document.createElement('div')
    output.classList.add('output')
    container.appendChild(output)

    // 创建 span
    let span: HTMLSpanElement = document.createElement('span')
    span.classList.add('result')
    span.textContent = '0'
    output.appendChild(span)

    // 更新 container
    strs.forEach(array => {
        let rowDiv: HTMLDivElement = document.createElement('div')
        rowDiv.classList.add('row')
        array.forEach(element => {
            let button: HTMLButtonElement = createButton(element, `text-${element}`)
            rowDiv.appendChild(button)
        })
        container.appendChild(rowDiv)
    })

    // 声明 n1,n2,operation
    let n1: string = ''
    let operation: string = ''
    let n2: string = ''

    // 计算
    container.addEventListener('click', (e) => {


        if (e.target instanceof HTMLButtonElement) {
            let button: HTMLButtonElement = e.target
            let key: string = button.textContent

            // key 是 num
            if (nums.indexOf(key) >= 0) {
                if (!operation) {
                    if (n1 == '0') {
                        n1 = ''
                    }
                    n1 = n1 + key
                    span.textContent = n1
                } else {
                    if (n2 == '0') {
                        n2 = ''
                    }
                    n2 += key
                    span.textContent = n2
                }

                // key 是 operation
            } else if (operations.indexOf(key) >= 0) {
                operation += key
            } else {
                // key 是 =
                if (key === '=') {

                    let num1: number = Number(n1)
                    let num2: number = Number(n2)
                    let answer: number
                    if (operation == '+') {
                        answer = num1 + num2
                    } else if (operation == '-') {
                        answer = num1 - num2
                    } else if (operation == '×') {
                        answer = num1 * num2
                    } else {
                        answer = num1 / num2
                    }
                    span.textContent = answer.toString()
                    n1 = ''
                    n2 = ''
                    operation = ''
                }
            }

        }
    })
});