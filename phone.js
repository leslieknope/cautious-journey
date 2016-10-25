var phonePrice = 25
const TAX = .09
var numPhones = 0
var numAccessories = 0
var accessoryPrice = 6
var threshold = 50
var purchaseTotal = 0


//calculate purchase amount
function calcCost(n){
    return function() {return n + n * TAX }
}

//calculate phone purchase amout
var phoneCost = calcCost(phonePrice)
var phoneCostFinal = phoneCost()

//calculate accessory purchase amount
var accessoryCost = calcCost(accessoryPrice)
var accessoryCostFinal = accessoryCost()
//debug helper, not needed for final product
console.log(phoneCostFinal);
console.log(accessoryCostFinal);

//calculate balance
function getBalance (balance) {
    var currentBalance;
    currentBalance = balance;
    return currentBalance;
}

//initialize Balance
var curBalance = getBalance(400);
console.log(curBalance);

do{
//purchase phones
    if(curBalance >= threshold + phoneCostFinal){  
    numPhones++;
    purchaseTotal += phoneCostFinal;
    curBalance = getBalance(curBalance - phoneCostFinal);
    console.log("You added a phone to your order. Phone cost is $" + phoneCostFinal + "  Your remaining balance is  $" + curBalance.toFixed(2));
    }
    if(curBalance >= threshold + accessoryCost()){
    numAccessories++;
    purchaseTotal += accessoryCostFinal;
    curBalance = getBalance(curBalance - accessoryCostFinal);
    console.log("You added an accessory to your order. Accessory cost is $" + accessoryCostFinal + " Your remaining balance is  $" + curBalance.toFixed(2));
    }
}
while(curBalance > threshold + accessoryCost())

console.log("Total phones purchased: " + numPhones + "  Total Accessories Purchased: " + numAccessories + "  account balance $" + curBalance.toFixed(2));
