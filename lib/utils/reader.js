const fs = require("fs");
class Reader{
    static readJson(url){
        const rawdata = fs.readFileSync(url);
        const explorers = JSON.parse(rawdata);
        return explorers;
    }
}
module.exports = Reader;