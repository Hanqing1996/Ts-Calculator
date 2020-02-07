function createButton(element: string):HTMLButtonElement {
    let button: HTMLButtonElement = document.createElement('button')
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

    strs.forEach(array => {
        let rowDiv:HTMLDivElement=document.createElement('div')
        rowDiv.classList.add('row')
        array.forEach(element => {
            rowDiv.appendChild(createButton(element))
        })
        container.appendChild(rowDiv)
    })
});