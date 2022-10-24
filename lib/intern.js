const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

class Intern extends Worker {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
    getHtml() {
        return formatHtml.intern(this);
    }
}
module.exports = Intern;