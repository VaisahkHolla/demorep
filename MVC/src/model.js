/*const Observer = require('./observer');

class Model {
    constructor() {
        //default array declared
        this.data = [];
        this.modelAdded = new Observer();
        this.modelRemoved = new Observer();
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", "data.json", true);
        this.xhr.onreadystatechange = callback;
        this.xhr.send(null); //null as nothing is passed in http body in GET
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
*/




const Observer = require('./observer');

class Model {

    constructor(data = []) {
        this.data = data;
        this.modelAdded = new Observer();
        this.modelRemoved = new Observer();
        const xhr = new XMLHttpRequest();
        xhr.open("Get", "/data.json", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                for (let value of JSON.parse(xhr.responseText)) {
                    this.data.push(value)
                    this.modelAdded.publish(this.data);
                }

            }

        }
        xhr.send(null);
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
module.exports = new Model();