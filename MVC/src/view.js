const Controller = require('./controller');
const Model = require('./model');

class View {
    constructor(elements = []) {
        this.elements = elements;
        this.model = Model;
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
        //clears the entire select menu, to retain them, we have to store the values somewhere and then 
        //recover the stored values first
        //or change only the removed option and render the DOM
        for (let data of newData) {
            var option = document.createElement('option');
            option.text = data;
            this.elements.nameList.add(option);
        }
    }
}

module.exports = View;