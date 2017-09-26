const View = require('./view');
const elements = {
    nameList: document.querySelector('#nameList'),
    addButton: document.querySelector('#addButton'),
    removeButton: document.querySelector('#removeButton')
}

let view = new View(elements);
view.init();