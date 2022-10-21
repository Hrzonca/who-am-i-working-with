const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

class Manager extends Worker {
    constructor(office) {
        super(name, id, email);
        this.office = office;
    }
    workerOffice() {
        return this.office;
    }
    formatHtml() {
        return formatHtml();
    }
}

module.exports = Manager;