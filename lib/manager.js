//calling files
const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

//adding sections to the Worker file specific for managers 
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

//saving the file as Manager 
module.exports = Manager;