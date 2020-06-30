const fs = require("fs");
const util = require("util");

class Writer {
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Writer(filename, data){
        try {
            return await this.writer(filename, data);
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = Writer;