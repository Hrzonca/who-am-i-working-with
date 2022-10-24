const Intern = require("../lib/intern");

test('getRole() should return "Intern"', () => {
    const desiredRole = 'Intern'
    const i = new Intern('test',1,'test@test.com', 'test')
    expect(i.getRole()).toBe(desiredRole)
    })
    
    test('getSchool() should return "github.com/test"', () => {
        const school = 'test'
        const s = new Intern('test',1,'test@test.com', 'test')
        expect(s.getSchool()).toBe(school)
    })