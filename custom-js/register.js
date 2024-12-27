const registerStatus = document.getElementById('user-register');
const existingEmail = document.getElementById('existingEmail');
//localStorage.setItem('allCustomers', null);
registerStatus.addEventListener("submit", RegisterUser);



function RegisterUser(event) {
    event.preventDefault(); 

    var firstName = document.getElementById('getFirstName').value;
    var lastName = document.getElementById('getLastName').value;
    var address1 = document.getElementById('getAddress1').value;
    var address2 = document.getElementById('getAddress2').value;
    
    var eircode = document.getElementById('getEircode').value;
    var city = document.getElementById('getCity').value;
    var county = document.getElementById('countySelect').value;
    var dob = document.getElementById('getDOB').value;
    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;

    const newRegisterData = 
    [
        {
            "FirstName": firstName,
            "LastName": lastName,
            "LocationData":
            {
                "AddressLine1": address1,
                "AddressLine2": address2,
                "Eircode": eircode,
                "City": city,
                "County": county
            },
            "DOB": dob,
            "EmailAddress": email,
            "Password": password,
            "ProductsInCart" : "null",
            "CardDetails" : "null"
        }
    ];


    //used to intialise when testing
    // customersRegisterd.push(...newRegisterData);
    // localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
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
        window.location.href = "shop.html"; 
    }
    

}

console.log(customersRegisterd);