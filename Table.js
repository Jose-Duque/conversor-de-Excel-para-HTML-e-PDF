class Table{
    constructor(arr){
        this.heard = arr[0];
        arr.shift(); // Para excluir a primeira linha do Arry
        this.rows = arr;
    }

    get RowCount() {
        return this.rows.length;
    }

    get ColumCount(){
        return this.heard.length;
    }
}

module.exports = Table;