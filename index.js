var customerName = 'bob';
function upperCaseCustomerName(){
    customerName=customerName.toUpperCase();
    return customerName;
}
var bestCustomer;
function setBestCustomer(){
    return bestCustomer="not bob";    
}
function overwriteBestCustomer(){
    return bestCustomer="maybe bob";
}
const leastFavoriteCustomer="cant change "
 function changeLeastFavoriteCustomer(){
        return leastFavoriteCustomer= "change it";
}