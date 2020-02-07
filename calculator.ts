function createButton(element: string,className:string):HTMLButtonElement {
    let button: HTMLButtonElement = document.createElement('button')
    button.classList.add(className)
    button.classList.add('button')
    button.textContent = element
    return button
}

let strs: Array<Array<string>> =
    [
        ['Clear', '+'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ]

window.addEventListener('load', () => {

    let container:HTMLDivElement=document.createElement('div') 
    container.classList.add('container')
    document.body.appendChild(container)

    let output:HTMLDivElement=document.createElement('div') 
    output.classList.add('output')
    container.appendChild(output)

    let span:HTMLSpanElement=document.createElement('span') 
    span.classList.add('result')
    span.textContent='0'
    output.appendChild(span)

    container.addEventListener('click',(e)=>{
        console.log(e.target)
    })

    strs.forEach(array => {
        let rowDiv:HTMLDivElement=document.createElement('div')
        rowDiv.classList.add('row')
        array.forEach(element => {
            let button:HTMLButtonElement=createButton(element,`text-${element}`)
            rowDiv.appendChild(button)
        })
        container.appendChild(rowDiv)
    })
});