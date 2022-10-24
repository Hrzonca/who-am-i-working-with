const Worker = require('../lib/worker')

test("can set id via constructor argument", () => {
    const w = new Worker();
    expect(typeof(w)).toBe("object")
})

test("can set id via getName()", () => {
    const desiredName = 'test'
    const e = new Worker(desiredName)
    expect(e.getName()).toBe(desiredName)
})

test("can set id via getId()", () => {
    const desiredId = 100
    const i = new Worker('test', desiredId)
    expect(i.getId()).toBe(desiredId)
})

test("can set id via getEmail()", () => {
    const desiredEmail = 'test@test.com'
    const e = new Worker('test', 1, desiredEmail)
    expect(e.getEmail()).toBe(desiredEmail)
})

test("can set role via getRole()", () => {
    const desiredRole = 'worker'
    const i = new Worker('test', desiredRole)
    expect(i.getRole()).toBe(desiredRole)
})