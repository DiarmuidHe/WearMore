const currentUser = localStorage.getItem(`currentUser`)

console.log(currentUser)

const registerStatus = document.getElementById('user-register');
const existingEmail = document.getElementById('existingEmail');
//localStorage.setItem('allCustomers', null);
//registerStatus.addEventListener("submit", EditUser);
const customersRegisterd = JSON.parse(localStorage.getItem('allCustomers')) || [];

const userDataHolder = document.getElementById('user-content')
function displayUserData()
{
    customersRegisterd.forEach(registered => {
        if(registered.EmailAddress == currentUser)
        {
            const userInfo = 
            `


                <form name="register" id="user-register"  method="get">
                    <div class="form-group">
                        <label for="getFirstName">First Name</label> 
                        <input type="text" class="form-control" id="getFirstName" name="firstName" value="${registered.FirstName}" pattern="^[a-zA-Z]+" title="Must contain only letters" placeholder="E.g. John, Mary, Mike, Leah"  readonly>
                    </div>
                    <div class="form-group">
                        <label for="getLastName">Last Name</label> 
                        <input type="text" class="form-control" id="getLastName" name="lastname" value="${registered.LastName}" pattern="^[a-zA-Z]+" title="Must contain only letters" placeholder="E.g. Smith, Brown, Miller, Jones" readonly>
                    </div> 
                    <div class="form-group">
                        <label for="emailAddressID">Email address</label>
                        <input type="text" class="form-control" id="emailAddressID" name="emailRegister" placeholder="name@example.com" value="${registered.EmailAddress}" pattern=".{1,100}(@)[a-zA-Z0-9]{1,50}(.ie|.com)" readonly>
                    </div>
                    <div class="form-group">
                        <label for="getAddress1">Address Line 1</label> 
                        <input type="text" class="form-control" id="getAddress1" name="address1" value="${registered.LocationData.AddressLine1}" pattern="^[a-zA-Z0-9\s]{1,30}" title="Must not contain any special characters" placeholder="E.g. 12 White St" readonly>
                    </div> 
                    <div class="form-group">
                    <label for="getAddress2">Address Line 2</label> 
                    <input type="text" class="form-control" id="getAddress2" name="address2" value="${registered.LocationData.AddressLine2}" pattern="^[a-zA-Z0-9\s]{1,30}" title="Must not contain any special characters" placeholder="E.g. Town, Village, Estate" readonly>
                    </div> 
                    
                    <div class="form-group">
                    <label for="getEircode">Eircode</label> 
                    <input type="text" class="form-control" id="getEircode" name="eircode" value="${registered.LocationData.Eircode}" pattern="^[a-zA-Z]{1}[0-9]{2}\s[a-zA-Z0-9]{4}" title="Must not contain any special characters" placeholder="E.g. G23 FQ23, Z12 35PC" readonly>
                    </div> 
                    <div class="form-group">
                    <label for="getCity">City</label> 
                    <input type="text" class="form-control" id="getCity" name="city" value="${registered.LocationData.City}" pattern="^[a-zA-Z\s]{1,30}" title="Must not contain any special characters" placeholder="E.g. Trinity College, Mullingar, Sligo" readonly>
                    </div> 
                    
                    <label for="countySelect" class="form-label">Select a County</label>
                    <select class="form-select" id="countySelect"  name="countySelect" readonly>
                        <option value="" disabled selected>${registered.LocationData.County}</option>
                        <option value="Carlow">Carlow</option>
                        <option value="Cavan">Cavan</option>
                        <option value="Clare">Clare</option>
                        <option value="Cork">Cork</option>
                        <option value="Donegal">Donegal</option>
                        <option value="Dublin">Dublin</option>
                        <option value="Galway">Galway</option>
                        <option value="Kerry">Kerry</option>
                        <option value="Kildare">Kildare</option>
                        <option value="Kilkenny">Kilkenny</option>
                        <option value="Laois">Laois</option>
                        <option value="Leitrim">Leitrim</option>
                        <option value="Limerick">Limerick</option>
                        <option value="Longford">Longford</option>
                        <option value="Louth">Louth</option>
                        <option value="Mayo">Mayo</option>
                        <option value="Meath">Meath</option>
                        <option value="Monaghan">Monaghan</option>
                        <option value="Offaly">Offaly</option>
                        <option value="Roscommon">Roscommon</option>
                        <option value="Sligo">Sligo</option>
                        <option value="Tipperary">Tipperary</option>
                        <option value="Waterford">Waterford</option>
                        <option value="Westmeath">Westmeath</option>
                        <option value="Wexford">Wexford</option>
                        <option value="Wicklow">Wicklow</option>
                    </select>

                    <div class="form-group">
                        <label for="getDOB">DOB</label> 
                        <input type="date" class="form-control" id="getDOB" name="dateOfBirth" value="${registered.DOB}" min="1900-01-01" max="2014-12-31" readonly>
                    </div> 

                    <div>
                        <input type='submit' class="btn btn-primary" value="register">
                    </div>
                </form>
 
            `;

             userDataHolder.innerHTML = userInfo;
        }
        
    });
}
displayUserData();


function EditUser(event) {
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
            "ProductsInCart" : null,
            "CardDetails" : null
        }
    ];


    //used to intialise when testing
    // customersRegisterd.push(...newRegisterData);
    // localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
    let emailUsable = true;
    customersRegisterd.forEach(registered => 
    {
    
    });


    if(emailUsable)
    {
        customersRegisterd.push(...newRegisterData);
        localStorage.setItem('allCustomers', JSON.stringify(customersRegisterd));
        
    }
    

}


