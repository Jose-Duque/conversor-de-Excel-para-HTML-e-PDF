const reader = require("./Reader");
const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

var leitor = new Reader();

async function main() {
    var dados =  await leitor.Read("./users.csv");
    
    var dadosProcessados =  Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    console.log(usuarios.heard);
    console.log(usuarios.rows);

    console.log(usuarios.RowCount);
    console.log(usuarios.ColumCount);
}
    
main();

