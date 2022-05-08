const readJ = require('../utils/reader')
class PartnersController{
    static readAllPartners(){
        const readPartners = readJ.readJson('../utils/visualPartners.json')
        return readPartners
    }
}