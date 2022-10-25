//intern testing. calling the intern file
const Intern = require("../lib/intern");

//testing that the role should return intern
test('getRole() should return "Intern"', () => {
    const desiredRole = 'Intern'
    const i = new Intern('test',1,'test@test.com', 'test')
    expect(i.getRole()).toBe(desiredRole)
    })
    
//testing that the school returns
    test('getSchool() should return "test"', () => {
        const school = 'test'
        const s = new Intern('test',1,'test@test.com', 'test')
        expect(s.getSchool()).toBe(school)
    })