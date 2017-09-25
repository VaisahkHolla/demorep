const Model = require("C:\demorep\MVC\model");

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