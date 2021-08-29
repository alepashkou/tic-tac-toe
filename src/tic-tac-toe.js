class TicTacToe {
    constructor() {
        this.winner = null;
        this.symbol = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        
        return this.symbol;

    }

    nextTurn(rowIndex, columnIndex) {

        if (this.field[rowIndex][columnIndex] === null){

            this.field[rowIndex][columnIndex] = this.symbol;
            if (this.symbol === 'x'){
                this.symbol = 'o'
            } else { this.symbol = 'x'}

            //vertical
            if (this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0])this.winner = this.field[0][0];
            if (this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1])this.winner = this.field[0][1];
            if (this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2])this.winner = this.field[0][2];

            //horizontal
            if (this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2])this.winner = this.field[0][0];
            if (this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2])this.winner = this.field[1][0];
            if (this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2])this.winner = this.field[2][0];

            //crossways
            if (this.field[2][0] === this.field[1][1] && this.field[1][1] === this.field[0][2])this.winner = this.field[2][0];
            if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2])this.winner = this.field[0][0];
           
        }
    }

    isFinished() {

        if (this.winner !== null || this.noMoreTurns()){
            return true
        } else {
            return false
        }

    }

    getWinner() {

        return this.winner;

    }

    noMoreTurns() {
        for(let i = 0;i< 3; i++){
            for(let j = 0;j< 3; j++){
                if(this.field[i][j] === null){
                    return false
                }         
            }    
        } return true        
    }

    isDraw() {

        return !this.getWinner() && this.noMoreTurns();

    }

    getFieldValue(rowIndex, colIndex) {

        return this.field[rowIndex][colIndex];
        
    }
}

module.exports = TicTacToe;