const Engineer = require('../lib/engineer.js');

test('getRole() should return "engineer"', () => {
const desiredRole = 'Engineer'
const e = new Engineer('test',1,'test@test.com', 'testhub')
expect(e.getRole()).toBe(desiredRole)
})

