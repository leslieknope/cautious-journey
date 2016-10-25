var phonePrice = 25
const TAX = .09
var numPhones = 0
var numAccessories = 0
var accessoryPrice = 6
var threshold = 50
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
    if(curBalance >= threshold + phoneCost){  
    numPhones++;
    purchaseTotal += phoneCost;
    curBalance = getBalance(curBalance - phoneCost);
    console.log("You added a phone to your order. Phone cost is $" + phoneCost + "  Your remaining balance is  $" + curBalance.toFixed(2));
    }
    if(curBalance >= threshold + accessoryCost){
    numAccessories++;
    purchaseTotal += accessoryCost;
    curBalance = getBalance(curBalance - accessoryCost);
    console.log("You added an accessory to your order. Accessory cost is $" + accessoryCost + " Your remaining balance is  $" + curBalance.toFixed(2));
    }
}
while(curBalance > threshold + accessoryCost)

console.log("Total phones purchased: " + numPhones + "  Total Accessories Purchased: " + numAccessories + "  account balance $" + curBalance.toFixed(2));
