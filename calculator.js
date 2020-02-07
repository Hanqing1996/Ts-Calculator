function createButton(element) {
    var button = document.createElement('button');
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
    strs.forEach(function (array) {
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        array.forEach(function (element) {
            rowDiv.appendChild(createButton(element));
        });
        container.appendChild(rowDiv);
    });
});
