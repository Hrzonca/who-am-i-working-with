//engineer test. calling the engineer file
const Engineer = require('../lib/engineer.js');

//testing that the role returns as engineer
test('getRole() should return "engineer"', () => {
const desiredRole = 'Engineer'
const e = new Engineer('test',1,'test@test.com', 'testhub')
expect(e.getRole()).toBe(desiredRole)
})

//testing that github returns 
test('getGithub() should return "https://github.com/test"', () => {
    const github = 'testhub'
    const g = new Engineer('test',1,'test@test.com', 'testhub')
    expect(g.getGithub()).toBe(github)
})

//testing that github username returns 
test('getGithub() should return "test"', () => {
    const github = 'testhub'
    const g = new Engineer('test',1,'test@test.com', 'testhub')
    expect(g.getGithub()).toBe(github)
})

