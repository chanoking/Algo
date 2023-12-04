class Queue {
    constructor() {
        this.queue = [];
    }

    add(item) {
        this.queue.unshift(item);
    }

    remove() {
        return this.queue.pop();
    }
}
