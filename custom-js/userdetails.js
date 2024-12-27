
const editBtn = document.getElementsByClassName("btn")[0];
const saveBtn = document.getElementsByClassName("btn")[1];
saveBtn.classList.add("d-none");        
saveBtn.classList.remove("d-show");


const userDetailsForm = document.getElementById("user-details");
userDetailsForm.addEventListener("submit",enableEdit);
//localStorage.setItem('allCustomers', null);
//registerStatus.addEventListener("submit", EditUser);

var firstName = document.getElementById('getFirstName');
var lastName = document.getElementById('getLastName');
var address1 = document.getElementById('getAddress1');
var address2 = document.getElementById('getAddress2');

var eircode = document.getElementById('getEircode');
var city = document.getElementById('getCity');
var county = document.getElementById('countySelect');
var dob = document.getElementById('getDOB');
var email = document.getElementById('emailAddressID');


function displayUserData()
{
    customersRegisterd.forEach(registered => {
        if(registered.EmailAddress == currentUser)
        {
            console.log(registered.FirstName);
            firstName.value = registered.FirstName;
            lastName.value = registered.LastName;
            address1.value = registered.LocationData.AddressLine1;
            address2.value = registered.LocationData.AddressLine2;
            city.value = registered.LocationData.City;
            eircode.value = registered.LocationData.Eircode;
            county.value = registered.LocationData.County;
            dob.value = registered.DOB
            email.value = registered.EmailAddress;


            firstName.setAttribute("disabled","disabled");
            lastName.setAttribute("disabled","disabled");
            address1.setAttribute("disabled","disabled");
            address2.setAttribute("disabled","disabled");
            city.setAttribute("disabled","disabled");
            eircode.setAttribute("disabled","disabled");
            county.setAttribute("disabled","disabled");
            dob.setAttribute("disabled","disabled");
            email.setAttribute("disabled","disabled");
        }
        
    });
}
displayUserData();



function enableEdit(event)
{
    firstName.removeAttribute("disabled");
    lastName.removeAttribute("disabled");
    address1.removeAttribute("disabled");
    address2.removeAttribute("disabled");
    city.removeAttribute("disabled");
    eircode.removeAttribute("disabled");
    county.removeAttribute("disabled");
    dob.removeAttribute("disabled");
    
    county.setAttribute("size","3");

    
    editBtn.classList.add("d-none");        
    editBtn.classList.remove("d-show");

    saveBtn.classList.add("d-show");
    saveBtn.classList.remove("d-none");        
    

    userDetailsForm.addEventListener("submit",EditUser);
    event.preventDefault(); 


}

function EditUser() {
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
            registered.DOB = dob.value;
        }
    });
    localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
    window.location.href = "userdetails.html"; 
    
}


