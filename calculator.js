function createButton(element, className) {
    var button = document.createElement('button');
    button.classList.add(className);
    button.classList.add('button');
    button.textContent = element;
    return button;
}
var strs = [
    ['Clear', '+'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
];
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
    container.addEventListener('click', function (e) {
        console.log(e.target);
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
