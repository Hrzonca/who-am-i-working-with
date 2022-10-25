//calling files
const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

//adding sections to the Worker file specific for engineers
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
//saving the file name as Engineer
module.exports = Enigineer;