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
    A:2,
    B:4,
    C:6,
    D:8
}

const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
}


const deposit = () => {
    while(true){
        const depositAmount = prompt("Masukan Deposit: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0 ){
            console.log("Tolong masukkan deposit yang benar");
            return process.exit();
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
            return process.exit();
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
            return process.exit();
        }
        else{
            return totalBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)){
        for(let i = 0; i < count; i++){
            symbols.push(symbol);
        }
     }
     
    const reels = []; 
    for(let i = 0; i < COLS; i++){
        reels.push([]);
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbols = reelSymbols[randomIndex];
            reels[i].push(selectedSymbols);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}

const transpose = (reels) => {
    const rows = [];
    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
}

const printSlot = (rows) => {
    for(const row of rows){
        let rowString = "";
        for (const[i, symbol] of row.entries()){
            rowString += symbol;
            if(i != row.length -1){
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}


const getWin = (rows,bet, lines) => {
    let winnings = 0;
    
    for(let row = 0; row < lines; row++){
        const symbols = rows[row];
        let same = true;

        for (const symbol of symbols){
            if(symbol != symbols[0]){
                same = false;
                break;
            }
        }

        if(same){
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
}

const game = () => {
    let balance = deposit();
    while(true){

        const lines = getNumberOfLines();
        const bet = getBet(balance,lines);
        balance -= bet * lines;
        const reels = spin();
        const trans = transpose(reels);
        const winnings = getWin(trans,bet,lines);

        printSlot(trans);
        console.log("Kamu menang $" + winnings);
        balance += winnings;
        
        if(balance <= 0){
            console.log("Uang kamu habis!");
            break;
        }
        console.log("Kamu memiliki $" + balance);
        const again = prompt("Apa kamu mau main lagi (y/n) ?");
        if(again != "y") break;
    }
    
}

game();

















