const cardName = document.getElementById('card-name');
const userName = document.querySelector('.user-name');
const atm = document.querySelector('.atm')
const atmInput = document.querySelector('.card-input')
const currBalance = document.querySelector('.current-balance')
const availBalance = document.querySelector('.dollars')
const AmountFund = document.querySelector('.amount-fund')
const Debit = document.querySelector('.amount-withdrawl')
const Addup = document.getElementById('top-up')
const Minus = document.getElementById('request')
console.log(userName);

// input user name
function changeName() {
    cardName.innerHTML = userName.value;
    
}
userName.addEventListener('input', changeName);

// change cardInput
function cardCode() {
    const padded = atmInput.value.toString().padStart(16, "*");
    atm.innerHTML = " ";
    atm.innerHTML = padded;
}
atmInput.addEventListener('input', cardCode)
// Get current balance
function currentBalance() {
     balance = currBalance.value;
    availBalance.innerHTML = `$${balance}`;
    
}
currBalance.addEventListener("input", currentBalance);
// Get amount to fund 
function amountFund() {
     Fund = AmountFund.value;
    console.log(Fund);
}
AmountFund.addEventListener("input", amountFund);

//Get amount to withdrawl
function Withdrawal() {
   debits = Debit.value;
    console.log(debits);
}
Debit.addEventListener("input", Withdrawal);


function Topup() {
    availBalance.innerHTML = `$${Number(balance) + Number(Fund)}`

}
function requests() {
    if (balance > debits) {
        availBalance.innerHTML = `$${Number(balance) - Number(debits)}`;  
    } else {
        alert(`your available balance is ${balance}`)
    }
   
}
Addup.addEventListener('click', Topup)
Minus.addEventListener('click', requests)





