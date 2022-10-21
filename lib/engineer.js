const Worker = require('./worker.js');
const formatHtml = require('./formatHtml.js');

class Enigineer extends Worker {
    constructor(github) {
        super(name, id, email);
        this.gitHub = github;
    }
    workerGithub() {
        return this.gitHub;
    }
    formatHtml() {
        return formatHtml();
    }
}
module.exports = Enigineer;