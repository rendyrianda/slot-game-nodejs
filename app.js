// determine number lines to bet
// collect bet amount
// spin slot machine
// check if the user won
// give the prize / taket their bet
// play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8
}


const SYMBOL_VALUES = {
    "A":5,
    "B":4,
    "C":3,
    "D":2
}


const spin = () => {
    const symbols = [];
    }


const deposit = () => {
    while(true){
        const depositAmount = prompt("Masukan Deposit: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
            console.log("Tolong masukkan deposit yang benar");
        }
        else{
            return numberDepositAmount;
        }
    
    }
    
}


// determine number lines to bet
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Masukan Baris yang akan dipilih (1-3): ");
        const numberOfLines = parseFloat(lines);
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Tolong pilih baris yang benar!");
        }
        else{
            return numberOfLines;
        }
    }
}

const getBet = (balance,lines) => {
    while(true){
        const bet = prompt("Masukan taruhan pada setiap baris: ");
        const totalBet = parseFloat(bet);

        if(isNaN(totalBet) || totalBet <= 0 || totalBet > balance / lines){
            console.log("Gagal! Coba lagi");
        }
        else{
            return totalBet;
        }
    }
}





let balance = deposit();
const numberOfLines  = getNumberOfLines();
const bet = getBet(balance,numberOfLines);




console.log(balance);
console.log(numberOfLines);
console.log(bet);












