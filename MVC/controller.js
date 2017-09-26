const Model = require("./model");

class Controller {
    constructor() {
        this.model = new Model();
    }
    addData(newData) {
        this.model.add(newData);
    }
    removeData(index) {
        this.model.remove(index);
    }
}

module.exports = Controller;