class Observer {
    constructor(subscribers = []) {
        this.subscribers = subscribers;
    }
    subscribe(cb) {
        this.subscribers.push(cb);
        //cb is a callback function
    }
    publish(data) {
        for (let subscriber of this.subscribers) {
            subscriber(data);
        }
    }
}

module.exports = Observer;