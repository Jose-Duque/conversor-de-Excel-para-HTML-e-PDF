
class Processor {

    static Process(data){
        var divisor = data.split("\r\n");
        var rows = [];

        divisor.forEach(row => {
            var arr =  row.split(",");
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;