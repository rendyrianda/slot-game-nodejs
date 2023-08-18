// determine number lines to bet
// collect bet amount
// spin slot machine
// check if the user won
// give the prize / taket their bet
// play again

const prompt = require("prompt-sync")();


// deposit some money
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

const getBet = (balance) => {
    while(true){
        const bet = prompt("Masukan Total yang akan dipertaruhkan: ");
        const totalBet = parseFloat(bet);
        if(isNaN(totalBet) || totalBet <= 0 || totalBet > balance){
            console.log("Gagal! Coba lagi");
        }
        else{
            return totalBet;
        }
    }
}

let balance = deposit();
const numberOfLines  = getNumberOfLines();
const bet = getBet(balance);
console.log(balance);
console.log(numberOfLines);
console.log(bet);












