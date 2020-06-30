const reader = require("./Reader");
const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParse = require("./HtmlParse");
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados =  await leitor.Read("./users.csv");
    
    var dadosProcessados =  Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParse.Parse(usuarios);

    escritor.Writer(Date.now() + ".html",html);

    PDFWriter.WritePDF(Date.now() + ".PDF",html);
    
    console.log(html);
}
    
main();

