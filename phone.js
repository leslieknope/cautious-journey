var phonePrice = 25
const TAX = .09
var balance = 412
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



do{
//purchase phones
    if(balance >= threshold + phoneCostFinal){  
    numPhones++;
    purchaseTotal += phoneCostFinal;
    (function () { balance = balance - phoneCostFinal})();
    console.log("You added a phone to your order. Phone cost is $" + phoneCostFinal + "  Your remaining balance is  $" + balance.toFixed(2));
    }
    if(threshold + accessoryCost()){
    numAccessories++;
    (function () { balance = balance - accessoryCost()})();
    console.log("You added an accessory to your order. Accessory cost is $" + accessoryCostFinal + " Your remaining balance is  $" + balance.toFixed(2));
    }
}
while(balance > threshold + accessoryCost())

console.log("Total phones purchased: " + numPhones + "  Total Accessories Purchased: " + numAccessories + "  account balance $" + balance.toFixed(2));
