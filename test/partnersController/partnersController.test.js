const { expect, test } = require("@jest/globals");
const control = require("../../lib/controllers/partnersController");
describe("Pruebas automatizadas",()=>{
    test("1. Prueba para obtener todos los datos",()=>{
        const result = control.visualpartners();
        expect(result).toBeDefined();
    });
    test("2. Prueba para los correos",()=>{
        const emailPrueba = "Todd@visualpartnership.xyz";
        const listEmail = control.getEmailData();
        expect(listEmail.emails[0]).toBe(emailPrueba);
    });
});