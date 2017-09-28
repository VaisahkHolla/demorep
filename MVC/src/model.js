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

//THIS IS THE SECOND VERSION

/*
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
*/
//THIS IS THE THIRD VERSION

//https://pastebin.com/Kbftfb5w
const Observer = require('./observer');

class Model {

    constructor(data = []) {
        debugger;
        this.data = data;
        this.modelAdded = new Observer();
        this.modelRemoved = new Observer();
        let xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open("Get", "http://localhost:9090", true);
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open("Get", "http://localhost:9090");
        } else {
            // CORS not supported.
            xhr = null;
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                debugger;
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