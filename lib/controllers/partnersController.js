const readJ = require('../utils/reader')
class PartnersController{
    static readAllPartners(){
        const readPartners = readJ.readJson('visualpartners.json')
        return readPartners
    }
}
module.exports = PartnersController