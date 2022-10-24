const Manager = require("../lib/manager");

test('getRole() should return "Manager"', () => {
    const desiredRole = 'Manager'
    const m = new Manager('test',1,'test@test.com', 'test')
    expect(m.getRole()).toBe(desiredRole)
    })
    
    test("can set id via getOffice()", () => {
        const office = 100
        const o = new Manager('test', 1, 'test@test.com', office)
        expect(o.getOffice()).toBe(office)
    })