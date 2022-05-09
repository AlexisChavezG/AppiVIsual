const { expect } = require('@jest/globals')
const control = require('../../lib/controllers/partnersController')
describe("Pruebas automatizadas",()=>{
    test("1. Prueba para obtener todos los datos",()=>{
        const result = control.visualpartners()
        expect(result).toBeDefined()
    })
})