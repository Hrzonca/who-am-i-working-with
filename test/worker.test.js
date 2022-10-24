const Worker = require('../lib/worker')

//testing constructor
test("can set name via constructor argument", () => {
    const desiredName = 'test'
    const e = new Worker(desiredName)
    expect(e.getName()).toBe(desiredName)
})

test("can get id via constructor argument", () => {
    const desiredId = 100
    const i = new Worker('test', desiredId)
    expect(i.getId()).toBe(desiredId)
})

test("can get email via constructor argument", () => {
    const desiredEmail = 'test@test.com'
    const e = new Worker('test', 1, desiredEmail)
    expect(e.getEmail()).toBe(desiredEmail)
})

test("can get role via constructor argument", () => {
    const desiredRole = 'worker'
    const i = new Worker('test', desiredRole)
    expect(i.getRole()).toBe(desiredRole)
})

//testing methods
test("can get id via getName()", () => {
    const desiredName = 'test'
    const e = new Worker(desiredName)
    expect(e.getName()).toBe(desiredName)
})

test("can get id via getId()", () => {
    const desiredId = 100
    const i = new Worker('test', desiredId)
    expect(i.getId()).toBe(desiredId)
})

test("can get id via getEmail()", () => {
    const desiredEmail = 'test@test.com'
    const e = new Worker('test', 1, desiredEmail)
    expect(e.getEmail()).toBe(desiredEmail)
})

test("can get role via getRole()", () => {
    const desiredRole = 'worker'
    const i = new Worker('test', desiredRole)
    expect(i.getRole()).toBe(desiredRole)
})