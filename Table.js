class Table{
    constructor(arr){
        this.heard = arr[0];
        arr.shift(); // Para excluir a primeira linha do Arry
        this.rows = arr;
    }
}

module.exports = Table;