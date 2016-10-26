var phonePrice = 25
const TAX = .09
var numPhones = 0
var numAccessories = 0
var accessoryPrice = 6
//var threshold = 50
var purchaseTotal = 0


//calculate purchase amount
function calcCost(n){
    return n + n * TAX;
}

//calculate phone purchase amout
var phoneCost = calcCost(phonePrice)

//calculate accessory purchase amount
var accessoryCost = calcCost(accessoryPrice)
//debug helper, not needed for final product
console.log(phoneCost);
console.log(accessoryCost);

//calculate balance
// function getBalance (balance) {
//     var currentBalance;
//     currentBalance = balance;
//     return currentBalance;
// }

//initialize Balance
// var curBalance = getBalance(400);
// console.log(curBalance);

(function buyPhones(balance, threshold){

do{
//purchase phones
    if(balance >= threshold + phoneCost){  
    numPhones++;
    purchaseTotal += phoneCost;
    balance = balance - phoneCost;
    console.log("You added a phone to your order. Phone cost is $" + phoneCost + "  Your remaining balance is  $" + balance.toFixed(2));
    }
    if(balance >= threshold + accessoryCost){
    numAccessories++;
    purchaseTotal += accessoryCost;
    balance = balance - accessoryCost;
    console.log("You added an accessory to your order. Accessory cost is $" + accessoryCost + " Your remaining balance is  $" + balance.toFixed(2));
    }
}
while(balance > threshold + accessoryCost)

console.log("Total phones purchased: " + numPhones + "  Total Accessories Purchased: " + numAccessories + "  account balance $" + balance.toFixed(2));
})(400, 50)