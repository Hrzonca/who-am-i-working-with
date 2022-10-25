//intern testing. calling the intern file
const Intern = require("../lib/intern");

//testing that the role should return intern
test('getRole() should return "Intern"', () => {
    const desiredRole = 'Intern'
    const i = new Intern('test',1,'test@test.com', 'test')
    expect(i.getRole()).toBe(desiredRole)
    })
    
//testing that the school returns
    test('can get school via getSchool()', () => {
        const ed = 'test'
        const s = new Intern('test',1,'test@test.com', ed)
        expect(s.getSchool()).toBe(ed)
    })

//testing school 
test('can set school via constructor argument', () => {
    const school = 'test'
    const s = new Intern('test',1,'test@test.com', school)
    expect(s.getSchool()).toBe(school)
})