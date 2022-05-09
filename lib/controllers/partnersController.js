const readJ = require('../utils/reader')
const services = require('../services/servicios')
class PartnersController{
    static  visualpartners(){
        const readPartners = readJ.readJson('visualpartners.json')
        const result = services.getAllPartners(readPartners);
        return result
    }
}
module.exports = PartnersController