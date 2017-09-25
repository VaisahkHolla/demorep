const Controller = require('C:\demorep\MVC\controller');
const Model = require('C:\demorep\MVC\model');

class View {
    constructor(elements = []) {
        this.elements = elements;
        this.model = new Model();
        this.controller = new Controller();

    }
    init() {
        this.model.modelAdded.subscribe((newData) => {
            this.render(newData)
        })

        this.model.modelRemoved.subscribe((index) => {
            this.render(index)
        })
        this.elements.addButton.addEventListener('click', () => {
            let name = prompt('Enter a new name');
            if (name)
                this.controller.addData(name);
        });
        this.elements.removeButton.addEventListener('click', () => {
            let index = this.elements.nameList.options.selectedIndex;
            this.controller.removeData(index);
        });
    }
    render(newData) {
        this.elements.nameList.innerHTML = "";
        for (data of newData) {
            this.elements.nameList.appendChild(document.createElement('option')
                .appendChild(document.createTextNode(data)))
        }
    }
}

module.exports = View;