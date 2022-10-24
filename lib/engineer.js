const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

class Enigineer extends Worker {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.gitHub = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.gitHub;
    }
    formatHtml() {
        return formatHtml.engineer(this);
    }
}
module.exports = Enigineer;