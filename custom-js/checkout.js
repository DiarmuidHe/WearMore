var firstName = document.getElementById('getFirstName');
var lastName = document.getElementById('getLastName');
var address1 = document.getElementById('getAddress1');
var address2 = document.getElementById('getAddress2');

var eircode = document.getElementById('getEircode');
var city = document.getElementById('getCity');
var county = document.getElementById('countySelect');
var dob = document.getElementById('getDOB');
var email = document.getElementById('emailAddressID');



customersRegisterd.forEach(registered => {
  if(registered.EmailAddress == currentUser)
  {
      //console.log(registered.FirstName);
      firstName.value = registered.FirstName;
      lastName.value = registered.LastName;
      address1.value = registered.LocationData.AddressLine1;
      address2.value = registered.LocationData.AddressLine2;
      city.value = registered.LocationData.City;
      eircode.value = registered.LocationData.Eircode;
      county.value = registered.LocationData.County;
      dob.value = registered.DOB
  }
  
});















// var checkout = document.getElementById('buy-now');
// // add a listener for add to cart if such a button id is pressed

// var element = document.getElementById("payment-failure");
// element.style.display = 'none';
// var element = document.getElementById("payment-success");
// element.style.display = 'none';

// add a listener so that we run this code and preventdefault for submit...
// checkout.addEventListener("click", () => {
//     event.preventDefault();
//     var cardnumber=document.getElementById('cardNumber').value;
//     var cardcvv=document.getElementById('cardCvv').value;

//     if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
//         alert("payment success");
//         var element = document.getElementById("payment-failure");
//         element.style.display = 'none';
//         //element.classList.add("d-none"); // bootstrap hide
//         var element = document.getElementById("payment-success");
//         element.style.display = 'block';
//         //element.classList.remove("d-none"); // bootstrap hide
//         // now set cart total to zero
//         var total=0;
//         const divCartContainer = document.getElementsByClassName('container')[0];
//         divCartContainer.innerHTML = "";
//         localStorage.setItem('allProductId', JSON.stringify(null));

//         // makes sure that when we goto another page the total is zero 
//         localStorage.setItem('checkout',total); 

//     } else {
//         alert("payment failure");
//         var element = document.getElementById("payment-failure");
//         element.style.display = 'block';
//         var element = document.getElementById("payment-success");
//         element.style.display = 'none';
//         //element.classList.add("d-none");
//         var element = document.getElementById("payment-failure");
//         //element.classList.remove("d-none");
 
//     }
//     return false;  

    
    
// })


