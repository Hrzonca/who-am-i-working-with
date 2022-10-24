const Engineer = require('../lib/engineer.js');

test('getRole() should return "engineer"', () => {
const desiredRole = 'Engineer'
const e = new Engineer('test',1,'test@test.com', 'testhub')
expect(e.getRole()).toBe(desiredRole)
})

test('getGithub() should return "github.com/test"', () => {
    const github = 'testhub'
    const g = new Engineer('test',1,'test@test.com', 'testhub')
    expect(g.getGithub()).toBe(github)
})
//need to do this for each method