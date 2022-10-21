const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

class Intern extends Worker {
    constructor(school) {
        super(name, id, email);
        this.school = school;
    }
    workerSchool() {
        return this.school;
    }
    formatHtml() {
        return formatHtml.intern(this);
    }
}
module.exports = Intern;