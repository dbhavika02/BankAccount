class bank {
    constructor(name,balance){
        //property
        this.name =name
        this.balance = balance
    }
    withdraw(amount){
        if(this.balance !=0){
        this.balance -=amount;
        console.log(`Balance after Withdraw $${this.balance}`)
        }else{
            console.log(`Account is empty we cant withdraw $${this.balance}`)
            this.balance = 0;
        }
    }
    deposit(amount){
        this.balance +=amount;
        console.log(`Balance after deposite $${this.balance}`)
    }
}
const accHolder = new bank('Bhavika',1000)
console.log(accHolder)
// accHolder.withdraw(500)
// accHolder.withdraw(500)
// accHolder.withdraw(100)


const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const ammountInput= document.getElementById('amount')
const balanceDiv = document.getElementById('balance')

// depositButton.onclick = accHolder.withdraw(ammountInput.value)
depositButton.onclick = () => {
    accHolder.deposit(Number(ammountInput.value))
    console.log(amount)
    balanceDiv.innerText = `Balnce: ${accHolder.balance}`
}
withdrawButton.onclick = () => {
    accHolder.withdraw(Number(ammountInput.value))
    console.log(amount)
    balanceDiv.innerText = `Balnce: ${accHolder.balance}`
}