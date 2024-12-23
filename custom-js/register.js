var registerStatus = document.getElementById('user-register');
// add a listener for add to cart if such a button id is pressed
registerStatus.addEventListener("submit", RegisterUser);
event.preventDefault();
const customersRegisterd = JSON.parse(localStorage.getItem('allCustomers')) || [];

function RegisterUser(){
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    customersRegisterd.push(itemNumber); 
    localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
  
}