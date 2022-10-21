class Workers {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    workerName() {
        return this.name;
    } 

    workerId() {
        return this.id;
    }
    workerEmail() {
        return this.email;
    }

}
module.exports = Workers;