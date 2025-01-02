 
'use strict'
const main = document.getElementsByTagName('main')[0];

var firstName = document.getElementById('getFirstName');
var lastName = document.getElementById('getLastName');
var address1 = document.getElementById('getAddress1');
var address2 = document.getElementById('getAddress2');
var eircode = document.getElementById('getEircode');
var city = document.getElementById('getCity');
var county = document.getElementById('countySelect');

const deliveryDetailsForm = document.getElementById("delivery-details");

deliveryDetailsForm.classList.add("d-none");        
deliveryDetailsForm.classList.remove("d-show");

// const skipDeliveryDetails = document.getElementsByClassName('btn')[0];

// const skipCardDetails = document.getElementsByClassName('btn')[1];




var cardholder = document.getElementById('getCardholder');
var cardNumber = document.getElementById('getCardNumber');
var expiry = document.getElementById('getExpiry');
var cvv = document.getElementById('getCVV');
const paymentDetailsForm = document.getElementById("payment-details");
paymentDetailsForm.classList.add("d-none");
paymentDetailsForm.classList.remove("d-show"); 



const registerStatus = document.getElementById('user-register');
const existingEmail = document.getElementById('existingEmail');
registerStatus.addEventListener("submit", (event) => {
    if (!registerStatus.checkValidity()) {
        event.preventDefault(); // Prevent form submission
        event.stopPropagation(); // Stop propagation
        registerStatus.classList.add("was-validated"); // Apply Bootstrap validation styles
    } else {
      event.preventDefault();
      RegisterUser();
    }
}, true );
main.style.marginBottom = "25em";
function RegisterUser() {
 
    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;
    const newRegisterData = 
    [
        {
            "FirstName": "",
            "LastName": "",
            "LocationData":
            {
                "AddressLine1": "",
                "AddressLine2": "",
                "Eircode": "",
                "City": "",
                "County": ""
            },
            "EmailAddress": email,
            "Password": password,
            "ProductsInCart" : "null",
            "CardDetails" : 
            {
                "CardNumber": "",
                "CardHolder": "",
                "Expiry": "",
                "CVV": "",
            }
        }
    ];

    let emailUsable = true;
    customersRegisterd.forEach(registered => 
    {
        

        if(registered.EmailAddress == newRegisterData[0].EmailAddress)
        {
            
            const existingEmailContent = 'This Email already exists please enter a different one or logIn'
            existingEmail.innerHTML = existingEmailContent
            emailUsable = false
        }
    });


    if(emailUsable)
    {
        customersRegisterd.push(...newRegisterData);
        localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
        //localStorage.getItem(`currentUser`);
        localStorage.setItem(`currentUser`, newRegisterData[0].EmailAddress);
        localStorage.setItem('loggedIn',1);
        registerStatus.classList.add('d-none');
        registerStatus.classList.remove('d-show');
        existingEmail.innerHTML = "";
        main.removeAttribute("style")
        LocationDisplay()

        //window.location.href = "index.html"; 
    }
    

}
function LocationDisplay()
{

    deliveryDetailsForm.classList.add("d-show");
    deliveryDetailsForm.classList.remove("d-none");


    //skipDeliveryDetails.addEventListener('click',ConfirmPayment);
    deliveryDetailsForm.addEventListener("submit", (event) => {
        if (!deliveryDetailsForm.checkValidity()) {
            event.preventDefault(); // Prevent form submission
            event.stopPropagation(); // Stop propagation
            deliveryDetailsForm.classList.add("was-validated"); // Apply Bootstrap validation styles
        } else {
          event.preventDefault();
            ConfirmLocation(); 
            
        }
    }, true );
}

function ConfirmLocation()
{

    customersRegisterd.forEach(registered => 
    {
      if(registered.EmailAddress == localStorage.getItem(`currentUser`))
      {
          
        registered.FirstName = firstName.value;
        registered.LastName = lastName.value;
        registered.LocationData.AddressLine1 = address1.value;
        registered.LocationData.AddressLine2 = address2.value;
        registered.LocationData.City  = city.value;
        registered.LocationData.Eircode = eircode.value;
        registered.LocationData.County = county.value;
        localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
      }
    });
  

  
  ConfirmPayment();
  
}



function ConfirmPayment(){

    deliveryDetailsForm.classList.add("d-none");        
    deliveryDetailsForm.classList.remove("d-show");
  
    paymentDetailsForm.classList.add("d-show");
    paymentDetailsForm.classList.remove("d-none"); 
    // skipCardDetails.addEventListener('click', ()=>
    // {
    //     window.location.href = "index.html";
    // });

    paymentDetailsForm.addEventListener("submit", (event) => {
    if (!paymentDetailsForm.checkValidity() || ValidatePayment()) 
    {
      event.preventDefault();
      event.stopPropagation(); 
      paymentDetailsForm.classList.add("was-validated"); 
    } 
    else 
    {
      event.preventDefault();
      customersRegisterd.forEach(registered => {
        if(registered.EmailAddress == localStorage.getItem(`currentUser`))
        {
          //console.log(registered.FirstName);
          registered.CardDetails.CardHolder = cardholder.value;
          registered.CardDetails.CardNumber = cardNumber.value;
          registered.CardDetails.Expiry = expiry.value;
          
          registered.CardDetails.CVV =  cvv.value;
          localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
        }
    
      });

      window.location.href = "index.html";
    }
  }, true );
}

function ValidatePayment(){
  var invalidCard = false;
  const cardholderError = document.getElementById("cardholder-error");
  const expiryError = document.getElementById("expiry-error");
  const cvvError = document.getElementById("cvv-error");
  customersRegisterd.forEach(registered => {
    if(registered.CardDetails.CardNumber == cardNumber.value)
    {
      if(registered.CardDetails.CardHolder != cardholder.value){
        cardholderError.innerHTML = "Incorect cardholder for this card";
        invalidCard = true;
      }
      if(registered.CardDetails.Expiry != expiry.value){
        expiryError.innerHTML = "Incorect expiry date for this card";
        invalidCard = true;
      }
      if(registered.CardDetails.CVV != cvv.value){
        cvvError.innerHTML = "Incorect cvv for this card";
        invalidCard = true;
      }
    }

  
  });
  return invalidCard;
  
}






console.log(customersRegisterd);