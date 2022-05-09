const readJ = require('../utils/reader')
class PartnersController{
    static  visualpartners(){
        const readPartners = readJ.readJson('visualpartners.json')
        return readPartners
    }
}
module.exports = PartnersController