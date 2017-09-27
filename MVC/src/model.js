const Observer = require('./observer');

class Model {
    constructor() {
        //default array declared
        this.data = [];
        this.modelAdded = new Observer();
        this.modelRemoved = new Observer();
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", "data.json", true);
        this.xhr.onreadystatechange = callback;
        this.xhr.send(null); //null as nothing is passed in http body
    }
    add(newData) {
        this.data.push(newData);
        this.modelAdded.publish(this.data);
    }
    remove(item) {
        this.data.splice(item, 1);
        this.modelRemoved.publish(this.data);
    }
    callback = () => {
        if (this.xhr.readyState === 4 && this.xhr.status === 200) {
            this.data = this.xhr.responseText;
        }
    }

}
module.exports = new Model();