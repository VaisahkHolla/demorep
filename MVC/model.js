const Observer = require('C:\demorep\MVC\observer');

class Model {
    constructor(data = []) {
        //default array declared
        this.data = data;
        this.modelAdded = new Observer();
        this.modelRemoved = new Observer();
    }
    add(newData) {
        this.data.push(newData);
        this.modelAdded.publish(this.data);
    }
    remove(item) {
        this.data.splice(item, 1);
        this.modelRemoved.publish(this.data);
    }
}
module.exports = Model;