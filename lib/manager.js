const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

class Manager extends Worker {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getRole() {
        return "Manager"
    }
    getOffice() {
        return this.office;
    }
    formatHtml() {
        return formatHtml.manager(this);
    }
}

module.exports = Manager;