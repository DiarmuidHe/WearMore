
'use strict'

const paymentSuccessDiv = document.getElementsByClassName('card')[0];
const checkOutContent = document.getElementsByClassName('row')[0];
paymentSuccessDiv.classList.add('d-none');
paymentSuccessDiv.classList.remove('d-show');
const legend = document.getElementsByTagName("legend")[0];
legend.innerHTML = "Delivery Details"

var firstName = document.getElementById('getFirstName');
var lastName = document.getElementById('getLastName');
var address1 = document.getElementById('getAddress1');
var address2 = document.getElementById('getAddress2');
var eircode = document.getElementById('getEircode');
var city = document.getElementById('getCity');
var county = document.getElementById('countySelect');
var dob = document.getElementById('getDOB');
var newLocationSave = document.getElementById("save-address")
const deliveryDetailsForm = document.getElementById("delivery-details");
//deliveryDetailsForm.addEventListener("submit", ConfirmLocation);



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


var cardholder = document.getElementById('getCardholder');
var cardNumber = document.getElementById('getCardNumber');
var expiry = document.getElementById('getExpiry');
var cvv = document.getElementById('getCVV');
var newCardSave = document.getElementById("save-card")
const paymentDetailsForm = document.getElementById("payment-details");
paymentDetailsForm.classList.add("d-none");
paymentDetailsForm.classList.remove("d-show"); 



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

  }

});


function ConfirmLocation()
{
  
  legend.innerHTML = "Payment Method"
  
  if(newLocationSave.checked)
  {
    customersRegisterd.forEach(registered => 
    {
      if(registered.EmailAddress == currentUser)
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
  }
  deliveryDetailsForm.classList.add("d-none");        
  deliveryDetailsForm.classList.remove("d-show");

  paymentDetailsForm.classList.add("d-show");
  paymentDetailsForm.classList.remove("d-none"); 

  
  ConfirmPayment();
  
}



function ConfirmPayment(){

  customersRegisterd.forEach(registered => {
    if(registered.EmailAddress == currentUser)
    {
      //console.log(registered.FirstName);
      cardholder.value = registered.CardDetails.CardHolder;
      cardNumber.value = registered.CardDetails.CardNumber;
      expiry.value = registered.CardDetails.Expiry;
      //cvv.value = registered.CardDetails.CVV;
    }

  });
  

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
      if(newCardSave.checked)
      {
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
      }
      PaymentSuccess();
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



const orderDescription = document.getElementsByTagName('tbody')[0];


function ItemsDisplay()
{
  
  var count = 0;
  let reoccuringids = [];
  let allPrices = [];
  let idFound = false;
  products.forEach(dataInformation => 
  {
    allProductIdsSaved.forEach(id => 
    {

      count = 0;
      allProductIdsSaved.forEach(comparisonID => 
      {
        if(id == comparisonID)
        {
          count++;
        }
      });

        
      var totPrice = count * dataInformation.product.price;
      const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totPrice);



      for(let i = 0; i < reoccuringids.length; i++)
      { 
        if(reoccuringids[i] == id)
        {
          idFound = true;
        }
          
      }
      
      if(id == dataInformation.product.productId && idFound == false)
      {
              
        reoccuringids.push(id);
        
        const productInCart = `
            <tr>
              
              <td>${dataInformation.product.title}</td>
              <td>${count}</td>
              <td>${formattedAmount}</td>
            </tr>
        `;
        allPrices.push(totPrice);
        orderDescription.innerHTML += productInCart;
      }

      idFound = false;
      
    });

      
  });
  var checkOutPrice = 0;
  //console.log(allPrices);
  allPrices.forEach(price=> 
  {
    checkOutPrice += price;
  });
  //console.log(checkOutPrice);
  //const cartValue = document.getElementById('cartValue');

  const cartValue =  `
    <tr>
      
      <td colspan="2"><b>Order Total</b></td>
      <td scope="row"><b>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(checkOutPrice)}</b></td>
    </tr>
      
    `;
    orderDescription.innerHTML += cartValue;
}
ItemsDisplay()


function PaymentSuccess(){
  
  paymentSuccessDiv.classList.remove('d-none');
  paymentSuccessDiv.classList.add('d-show');

  checkOutContent.classList.add('d-none');
  checkOutContent.classList.remove('d-show');

  legend.innerHTML = "";
  
  allProductIdsSaved.splice(0, allProductIdsSaved.length);
  localStorage.setItem('allProductId', JSON.stringify(allProductIdsSaved));
  
  matchCartWithUser();
  localStorage.setItem('checkout', 0);
  document.querySelector('#checkout').innerHTML= localStorage.getItem('checkout');
  
  
  document.body.style.backgroundSize = "cover"; 
  document.body.style.backgroundRepeat = "no-repeat"; 
  document.body.style.backgroundPosition = "center"; 
  document.body.style.backgroundImage = "url('landScapeImages/Jeans2.jpg')";
}