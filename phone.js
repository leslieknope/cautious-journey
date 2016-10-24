var phonePrice = 25
const TAX = .09
var balance = 412
var numPhones = 0
var numAccessories = 0
var accessoryPrice = 6
var threshold = 50
var cost


//calculate purchase amount
function calcCost(n){
    return function() {return n + n * TAX }
}

//calculate phone purchase amout
var phoneCost = calcCost(phonePrice)

//calculate accessory purchase amount
var accessoryCost = calcCost(accessoryPrice)

//debug helper, not needed for final product
console.log(phoneCost());
console.log(accessoryCost());



do{
//purchase phones
    if(balance >= threshold + phoneCost()){  
    numPhones++
    (function () { balance = balance - phoneCost()})();
    console.log("you added a phone to your order, your remaining balance is  " + balance.toFixed(2));
    }
    if(threshold + accessoryCost()){
    numAccessories++;
    (function () { balance = balance - accessoryCost()})();
    console.log("you added a phone to your order, your remaining balance is  " + balance.toFixed(2));
    }

}
while(balance > threshold + accessoryCost())

console.log("Total phones purchased: " + numPhones + "  Total Accessories Purchased: " + numAccessories + "  account balance " + balance.toFixed(2));
