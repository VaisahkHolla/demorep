class Model {
    constructor(data = []) {
        //default array declared
        this.data = data;
    }
    add(newData) {
        this.data.push(newData);
    }
    remove(item) {
        this.data.splice(item, 1);
    }
}
module.exports = Model;